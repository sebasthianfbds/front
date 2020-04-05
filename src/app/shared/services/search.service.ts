import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  filter: string;
  constructor(private router: Router) {}

  handleSearch() {
    if (!this.filter) return;
    this.router.navigate(["/search/profile"], {
      queryParams: { name: this.filter },
    });
    this.filter = "";
  }
}
