import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import { FormComponent } from "src/app/shared/components/form/form.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  title = "Acesso";
  @ViewChild("appForm", { static: false, read: FormComponent })
  appForm: FormComponent;
  @ViewChild("loginButton", { static: false, read: ElementRef })
  loginButton: ElementRef<HTMLButtonElement>;

  formConfig = [
    {
      label: "E-mail",
      name: "email",
      type: "email",
      validators: ["email", "required"],
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      validators: ["required"],
    },
  ];

  handleLogin() {
    if (this.appForm.invalid) return;
    this.loginButton.nativeElement.disabled = true;
    this.authService
      .login(this.appForm.value)
      .subscribe()
      .add(() => (this.loginButton.nativeElement.disabled = false));
  }
  ngOnInit() {}
}
