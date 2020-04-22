import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { IPost } from "src/app/core/post";
import { map, catchError } from "rxjs/operators";
import { MonitorService } from "./monitor.service";
import { throwError } from "rxjs";
import { SnackbarService } from "./snackbar.service";

@Injectable({
  providedIn: "root",
})
export class PostService {
  getAll() {
    return this.monitor.watch(this.rest.get<IPost[]>("post")).pipe(
      map((posts) => {
        return posts.map((post) => {
          post.showComments = false;
          return post;
        });
      })
    );
  }
  publish(payload: { text: string }) {
    return this.monitor.watch(this.rest.post("post", payload)).pipe(
      catchError((e) => {
        this.snack.show({ message: e, type: "D" });
        return throwError(e);
      })
    );
  }

  delete(postId: string) {
    return this.monitor.watch(this.rest.delete("post", { id: postId }));
  }

  like(postId: string) {
    return this.monitor.watch(this.rest.post("post/like", { id: postId }));
  }

  constructor(
    private rest: RestService,
    private monitor: MonitorService,
    private snack: SnackbarService
  ) {}
}
