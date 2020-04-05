import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { IComment } from "src/app/core/post";
import { MonitorService } from "./monitor.service";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  comment(payload: { post_id: any; text: string }) {
    return this.monitor.watch(this.rest.post<any>("comment", payload));
  }

  loadComments(postId: string) {
    return this.monitor.watch(
      this.rest.get<IComment[]>("comment", {
        post_id: postId
      })
    );
  }
  constructor(private rest: RestService, private monitor: MonitorService) {}
}
