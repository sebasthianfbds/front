import { Injectable, ErrorHandler } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoggedInGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.tokenIsValid().pipe(
      map((loggedIn) => {
        //console.log("loggedIn", loggedIn);
        if (!loggedIn) this.router.navigate(["login"]);
        return loggedIn;
      }),
      catchError(() => {
        this.router.navigate(["login"]);
        return throwError(false);
      })
    );
  }

  constructor(private auth: AuthService, private router: Router) {}
}
