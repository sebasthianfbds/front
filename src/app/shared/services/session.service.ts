import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SessionService {
  clearToken() {
    localStorage.setItem("app-token", "");
  }

  setToken(token: string): void {
    localStorage.setItem("app-token", token);
  }
  getToken(): string {
    return localStorage.getItem("app-token") || "";
  }
  constructor() {}
}
