import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { FormComponent } from "src/app/shared/components/form/form.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  title = "Registro";
  @ViewChild("appForm", { static: false, read: FormComponent })
  appForm: FormComponent;
  @ViewChild("loginButton", { static: false, read: ElementRef })
  registerButton: ElementRef<HTMLButtonElement>;

  handleRegister() {
    if (this.appForm.invalid) return;
    this.userService.register(this.appForm.value).subscribe();
  }

  formConfig = [
    {
      label: "Nome",
      name: "name",
      type: "text",
      validators: ["required"],
    },
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
    {
      label: "Tipo",
      name: "type",
      type: "combobox",
      values: [
        {
          value: "PESQUISADOR",
          label: "Pesquisador",
        },
        {
          value: "ALUNO",
          label: "Aluno",
        },
      ],
      validators: ["required"],
    },
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
