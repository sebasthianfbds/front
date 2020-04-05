import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../../services/settings.service";
import { AuthService } from "../../services/auth.service";
import { SearchService } from "../../services/search.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public settingsService: SettingsService,
    public searchService: SearchService
  ) {}

  ngOnInit() {}

  handleKeyUp($event) {
    if ($event.keyCode === 13) this.searchService.handleSearch();
  }
}
