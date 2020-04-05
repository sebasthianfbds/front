import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";

@Injectable({
  providedIn: "root"
})
export class PushNotificationService {
  constructor(private restService: RestService) {}

  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.restService
      .post("notification/subscription", subscription)
      .subscribe();
  }
}
