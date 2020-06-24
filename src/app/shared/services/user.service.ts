import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { IPost } from "src/app/core/post";
import { RestService } from "./rest.service";
import { Router } from "@angular/router";
import { MonitorService } from "./monitor.service";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  get(name: string) {
    return this.monitor
      .watch(this.restService.get("user/search", { name: name }))
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }
  follow(userId: string): Observable<any> {
    return this.monitor
      .watch(this.restService.post("user/follow", { userId: userId }))
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }
  unfollow(userId: string) {
    return this.monitor.watch(
      this.restService.post("user/unfollow", { userId: userId })
    );
  }
  getUserProfile(name: string): Observable<any> {
    return this.restService
      .get<any>("user/profile", { name: name })
      .pipe(
        map((profile) => {
          profile.posts.map((post) => {
            post.showComments = false;
            return post;
          });
          return profile;
        }),
        catchError((e) => {
          return throwError(e);
        })
      );
  }
  getUserPosts() {
    return this.monitor.watch(this.restService.get<IPost[]>("post/user")).pipe(
      map((posts) => {
        return posts.map((post) => {
          post.showComments = false;
          return post;
        });
      })
    );
  }

  register(payload: { name: string; email: string; password: string }) {
    return this.monitor.watch(this.restService.post("user", payload)).pipe(
      map((result) => {
        this.router.navigate(["/login"]);
        return result;
      })
    );
  }
  sugestion() {
    return this.monitor.watch(this.restService.get("user/sugestion"));
  }
  constructor(
    private restService: RestService,
    private monitor: MonitorService,
    private router: Router
  ) {}
}
