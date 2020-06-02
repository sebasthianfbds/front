import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PermissionService {
  private _permission: string;

  public get permission() {
    return this._permission;
  }
  public set permission(value: string) {
    this._permission = value;
  }
  constructor() {}
}
