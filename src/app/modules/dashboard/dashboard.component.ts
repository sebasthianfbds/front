import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/shared/services/dashboard.service";
import { IPost } from "src/app/core/post";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  categories: { name: string; userCount: number }[];
  posts: IPost[];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.get().subscribe((data) => {
      this.categories = data.categories;
      this.posts = data.posts;
    });
  }
}
