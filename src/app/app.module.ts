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
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  NativeDateAdapter,
} from "@angular/material/core";
import { formatDate } from "@angular/common";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const PICK_FORMATS = {
  parse: { dateInput: { month: "numeric", year: "numeric", day: "numeric" } },
  display: {
    dateInput: "input",
    monthYearLabel: { year: "numeric", month: "numeric" },
    dateA11yLabel: { year: "numeric", month: "numeric", day: "numeric" },
    monthYearA11yLabel: { year: "numeric", month: "numeric" },
  },
};

class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === "input") {
      return formatDate(date, "dd-MM-yyyy", this.locale);
    } else {
      return date.toDateString();
    }
  }
}

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
    DashboardComponent,
  ],
  imports: [
    MatDatepickerModule,
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
    MatSelectModule,
    MatChipsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: PickDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
