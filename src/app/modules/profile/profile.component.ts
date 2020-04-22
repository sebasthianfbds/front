import { Component, OnInit, OnDestroy } from "@angular/core";
import { IPost } from "src/app/core/post";
import { SettingsService } from "src/app/shared/services/settings.service";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/shared/services/user.service";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  myPosts: IPost[];
  userData = {
    _id: "",
    imageUrl: "",
    name: "",
    myProfile: false,
    following: false,
  };
  loading = true;
  loadingFollow = false;
  showSettings = false;
  routeSubs: any;
  ngOnInit() {
    this.loadUserProfile();
    this.routeSubs = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) this.loadUserProfile();
    });
  }

  ngOnDestroy() {
    this.routeSubs.unsubscribe();
  }

  loadUserProfile() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      const name = params.name;

      this.userService
        .getUserProfile(name)
        .pipe(
          catchError((e) => {
            this.router.navigate(["search/profile"], {
              queryParams: { name: name },
            });
            return throwError(e);
          })
        )
        .subscribe((profile) => {
          this.myPosts = profile.posts;
          this.userData = {
            imageUrl: profile.data.imageUrl,
            name: profile.data.name,
            myProfile: profile.myProfile,
            following: profile.following,
            _id: profile.data._id,
          };
        })
        .add(() => (this.loading = false));
    });
  }

  onSubmitChange() {
    this.showSettings = false;
  }
  onHandlePostSubmit(post) {
    this.userService.getUserPosts().subscribe((posts) => {
      this.myPosts = posts;
    });
  }

  handleFollow() {
    this.loadingFollow = true;
    this.userService
      .follow(this.userData._id)
      .pipe(map(() => (this.userData.following = true)))
      .subscribe()
      .add(() => (this.loadingFollow = false));
  }

  handleUnFollow() {
    this.loadingFollow = true;
    this.userService
      .unfollow(this.userData._id)
      .pipe(map(() => (this.userData.following = false)))
      .subscribe()
      .add(() => (this.loadingFollow = false));
  }

  constructor(
    private userService: UserService,
    public settingsService: SettingsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
