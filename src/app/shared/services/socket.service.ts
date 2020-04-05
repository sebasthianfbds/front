import { Injectable } from "@angular/core";
import * as socketIo from "socket.io-client";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export enum SocketEvent {
  ON_POST_ID = "on_post_id",
  ON_NEW_COMMENT = "on_new_comment",
  ON_NEW_POST = "on_new_post",
  ON_SEND_SESSION_ID = "on_send_session_id"
}

@Injectable()
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(environment.host);
  }
  public disconnect(): void {
    if (this.socket) this.socket.disconnect();
  }

  public emit(event: SocketEvent, data?: any): void {
    this.socket.emit(event, data);
  }

  public onEvent(event: SocketEvent): Observable<any> {
    return new Observable<SocketEvent>(observer => {
      this.socket.on(event, data => observer.next(data));
    });
  }
}
