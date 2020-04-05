import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./modules/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MenuComponent } from "./shared/components/menu/menu.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PostCardComponent } from "./shared/components/post-card/post-card.component";
import { MatCardModule } from "@angular/material/card";
import { NewPostComponent } from "./shared/components/new-post/new-post.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./modules/profile/profile.component";
import { SettingsComponent } from "./modules/profile/settings/settings.component";
import { LoginComponent } from "./modules/login/login.component";
import { FeedComponent } from "./shared/components/feed/feed.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { PostComponent } from "./modules/post/post.component";
import { RegisterComponent } from "./modules/register/register.component";
import { LoadingComponent } from "./shared/components/loading/loading.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { PostCcontainerComponent } from "./shared/components/post-container/post-container.component";
import { FormComponent } from "./shared/components/form/form.component";
import { GenericCardComponent } from "./shared/components/generic-card/generic-card.component";
import { SocketService } from "./shared/services/socket.service";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "./shared/components/confirm-dialog/confirm-dialog.component";
import { FollowSugestionComponent } from "./shared/components/follow-sugestion/follow-sugestion.component";
import { TextAreaComponent } from "./shared/components/text-area/text-area.component";
import { SearchComponent } from "./modules/search/search.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PostCardComponent,
    NewPostComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    FeedComponent,
    PostComponent,
    RegisterComponent,
    LoadingComponent,
    PostCcontainerComponent,
    FormComponent,
    GenericCardComponent,
    ConfirmDialogComponent,
    FollowSugestionComponent,
    TextAreaComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDialogModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
