import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class KeyDetectionService {
  onKey(key: number, callback: any) {
    window.addEventListener("keyup", (e) => {
      //console.log(e.keyCode);
      if (e.keyCode === key) if (callback) callback();
      return;
    });
  }

  keyUp = new BehaviorSubject<number>(0);

  constructor() {
    window.addEventListener("keyup", (e) => {
      e.preventDefault();
      this.keyUp.next(e.keyCode);
      return;
    });
  }
}
