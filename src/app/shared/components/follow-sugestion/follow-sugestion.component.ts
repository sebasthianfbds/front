import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
@Component({
  selector: "app-follow-sugestion",
  templateUrl: "./follow-sugestion.component.html",
  styleUrls: ["./follow-sugestion.component.scss"],
})
export class FollowSugestionComponent implements OnInit {
  items = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.sugestion().subscribe((result) => {
      this.items = result;
      // console.log(result);
    });
  }
}
