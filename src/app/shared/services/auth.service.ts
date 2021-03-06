import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { SessionService } from "./session.service";
import { MonitorService } from "./monitor.service";
import { PermissionService } from "./permission.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  logout() {
    this.monitor
      .watch(this.restService.post("auth/exit", {}))
      .pipe(
        map(() => {
          this.sessionService.clearToken();
          this.router.navigate(["/login"]);
        }),
        catchError((e) => {
          this.sessionService.clearToken();
          this.router.navigate(["/login"]);
          return throwError(e);
        })
      )
      .subscribe();
  }

  login(payload: { email: string; password: string }) {
    return this.monitor.watch(this.restService.post("auth", payload)).pipe(
      map((result: { token: string; permission: string }) => {
        this.permissionService.permission = result.permission;
        this.sessionService.setToken(result.token);
        this.router.navigate(["/feed"]);
        return result;
      }),
      catchError((e) => {
        this.sessionService.clearToken();
        return throwError(e);
      })
    );
  }

  tokenIsValid(): Observable<boolean> {
    return new Observable((subscribe) => {
      this.isLoggedIn().subscribe(
        (result) => {
          if (!result) this.sessionService.clearToken();
          subscribe.next(result);
        },
        (err) => {
          this.sessionService.clearToken();
          subscribe.next(false);
          throw err;
        }
      );
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.restService.get("auth/loggedIn", {});
  }

  constructor(
    private restService: RestService,
    private router: Router,
    private sessionService: SessionService,
    private monitor: MonitorService,
    private permissionService: PermissionService
  ) {}
}
