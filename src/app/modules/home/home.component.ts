import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SettingsService } from "src/app/shared/services/settings.service";
import { SwPush } from "@angular/service-worker";
import { PushNotificationService } from "src/app/shared/services/push-notification.service";
import { environment } from "src/environments/environment";

const VAPID_PUBLIC =
  "BDx9P20VhKgshsm7SkdpQ9odpOL1z2XYaGpyfXA58_4W_8yV87D2QKbCGuj2OQ3V2B_HWVEDIm3vT9vxScHuil4";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private swPush: SwPush,
    private pushService: PushNotificationService
  ) {}

  ngOnInit() {
    console.log(
      "Push Notification",
      this.swPush.isEnabled ? "online" : "offline"
    );

    this.swPush.notificationClicks.subscribe((options) => {
      window.open(environment.host + options.notification.data);
    });

    window.addEventListener("notificationclick", (event) => {});

    if (this.swPush.isEnabled) {
      Notification.requestPermission((permission) => {
        if (permission) {
          this.swPush
            .requestSubscription({
              serverPublicKey: VAPID_PUBLIC,
            })
            .then((subscription) => {
              this.pushService.sendSubscriptionToTheServer(subscription);
            })
            .catch(console.error);
        }
      });
    }
    this.settingsService.load().subscribe();
  }
}
