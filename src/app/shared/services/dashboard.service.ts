import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { MonitorService } from "./monitor.service";
import { IPost } from "src/app/core/post";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(
    private restService: RestService,
    private monitor: MonitorService
  ) {}

  get() {
    return this.monitor
      .watch<{
        posts: IPost[];
        categories: { name: string; userCount: number }[];
      }>(this.restService.get("dashboard"))
      .pipe(
        catchError((e) => {
          return throwError(e);
        })
      );
  }
}
