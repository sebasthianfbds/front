import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  show(opts: { message: string; duration?: number }) {
    if (!opts.message) return;
    this.snackBar.open(opts.message, "close", {
      duration: opts.duration || 2500,
      verticalPosition: "top",
      horizontalPosition: "right",
    });
  }
}
