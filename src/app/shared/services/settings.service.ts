import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { IUserSettings } from "src/app/core/user";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { MonitorService } from "./monitor.service";
import { SnackbarService } from "./snackbar.service";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  private _userData: IUserSettings;
  set userData(value: IUserSettings) {
    delete value.password;
    this._userData = Object.assign({}, value);
  }

  get userData() {
    if (!this._userData) return {} as IUserSettings;
    return this._userData;
  }

  update(payload: IUserSettings) {
    return this.monitor
      .watch(
        this.restService.put("user", {
          name: payload.name,
          password: payload.password,
          imageUrl: payload.imageUrl,
        })
      )
      .pipe(
        map(() => {
          this.userData = payload;
        }),
        catchError((e) => {
          this.snack.show({ message: e });
          return throwError(e);
        })
      );
  }
  load(): Observable<IUserSettings> {
    return this.monitor.watch(this.restService.get("user/settings")).pipe(
      map((user) => {
        this.userData = user;
        return user;
      })
    );
  }
  constructor(
    private snack: SnackbarService,
    private restService: RestService,
    private monitor: MonitorService
  ) {}
}
