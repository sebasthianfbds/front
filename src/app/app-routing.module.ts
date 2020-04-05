import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";
import { ProfileComponent } from "./modules/profile/profile.component";
import { SettingsComponent } from "./modules/profile/settings/settings.component";
import { LoginComponent } from "./modules/login/login.component";
import { LoggedInGuard } from "./shared/guard/logged-in.guard";
import { NotLoggedInGuard } from "./shared/guard/not-logged-in.guard";
import { FeedComponent } from "./shared/components/feed/feed.component";
import { RegisterComponent } from "./modules/register/register.component";
import { SearchComponent } from "./modules/search/search.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [NotLoggedInGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [NotLoggedInGuard],
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: "",
        component: FeedComponent,
      },
      {
        path: ":name",
        component: ProfileComponent,
      },
      {
        path: "search/profile",
        component: SearchComponent,
      },
    ],
  },
  { path: "*", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
