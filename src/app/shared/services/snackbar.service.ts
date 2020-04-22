import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  show(opts: { message: string; type: "S" | "W" | "D" }) {
    var panelClass = "";
    var duration = 2500;
    var action = "X";

    if (opts.type === "S") {
      action = undefined;
      panelClass = "snack-bar-success";
      duration = 1000;
    } else if (opts.type === "W") {
      panelClass = "snack-bar-warning";
      duration = 2500;
    } else {
      panelClass = "snack-bar-danger";
      duration = 3500;
    }
    if (!opts.message) return;
    this.snackBar.open(opts.message, action, {
      duration,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass,
    });
  }
}
