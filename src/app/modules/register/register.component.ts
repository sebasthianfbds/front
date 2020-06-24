import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { FormComponent } from "src/app/shared/components/form/form.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) {}
  title = "Registro";
  @ViewChild("appForm", { static: false, read: FormComponent })
  appForm: FormComponent;
  @ViewChild("loginButton", { static: false, read: ElementRef })
  registerButton: ElementRef<HTMLButtonElement>;

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
      label: "País",
      name: "pais",
      type: "text",
      validators: ["required"],
    },
    {
      label: "Estado",
      name: "estado",
      type: "text",
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
    {
      label: "Data de Nascimento",
      name: "data",
      type: "date",
      validators: [],
    },
    {
      label: "Data inicio carreira",
      name: "datai",
      type: "date",
      validators: [],
    },
    {
      label: "Topicos de interesse",
      name: "interesses",
      type: "multicombobox",
      values: [
        { value: "artificial intelligence", label: "artificial intelligence" },
        { value: "backpropagation", label: "backpropagation" },
        { value: "algorithm", label: "algorithm" },
        { value: "binomial distribution", label: "binomial distribution" },
        { value: "chi-square test", label: "chi-square test" },
        { value: "Bayesian network", label: "Bayesian network" },
        { value: "Bayes' Theorem", label: "Bayes' Theorem" },
        { value: "bias", label: "bias" },
        { value: "Big Data", label: "Big Data" },
        { value: "AngularJS", label: "AngularJS" },
      ],
      validators: [],
    },
  ];

  handleRegister() {
    if (this.appForm.invalid) return;
    let data = new Date(this.appForm.value["data"]).getFullYear();
    if (data > 2002) return;
    let pais = (this.appForm.value["pais"] || ("" as string)).toUpperCase();
    if (pais !== "BRASIL") return;
    this.userService.register(this.appForm.value).subscribe();
  }

  ngOnInit(): void {}
}
