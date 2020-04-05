import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  loading = false;
  users: [];
  filter: string;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.queryParams.subscribe((params) => {
      const name = params.name;
      this.filter = name;
      this.userService
        .get(name)
        .subscribe((users) => {
          this.users = users;
          console.log(users);
        })
        .add(() => (this.loading = false));
    });
  }
}
