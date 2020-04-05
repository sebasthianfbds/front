import { Injectable } from "@angular/core";
import { SnackbarService } from "./snackbar.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MonitorService {
  watch<T>(observable: Observable<T>) {
    return observable.pipe(
      catchError((e) => {
        this.snack.show({ message: e });
        return throwError(e);
      })
    );
  }
  constructor(private snack: SnackbarService) {}
}
