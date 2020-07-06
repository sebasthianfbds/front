import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { FormComponent } from "src/app/shared/components/form/form.component";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserService,
    private notify: SnackbarService,
    private dataService: DataService
  ) {}
  title = "Registro";
  @ViewChild("appForm", { static: false, read: FormComponent })
  appForm: FormComponent;
  @ViewChild("loginButton", { static: false, read: ElementRef })
  registerButton: ElementRef<HTMLButtonElement>;

  type: "ALUNO" | "PESQUISADOR";

  commonFields = [
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
      label: "Data de Nascimento",
      name: "data",
      type: "date",
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
  ];

  formConfigPesquisador = [
    {
      label: "Instituicao de pesquisa",
      name: "instituicao",
      type: "text",
      validators: ["required"],
    },

    {
      label: "Link curriculo",
      name: "link_curriculo",
      type: "text",
      validators: ["required"],
    },
    {
      label: "Data inicio carreira cientista de dados",
      name: "datai",
      type: "date",
      validators: ["required"],
    },
  ];

  formConfigAluno = [
    {
      label: "CPF",
      name: "cpf",
      type: "text",
      validators: ["required"],
    },
    {
      label: "Grau escolaridade",
      name: "grau_escolaridade",
      type: "text",
      validators: ["required"],
    },
    {
      label: "Topicos de interesse",
      name: "interesses",
      type: "multicombobox",
      values: this.dataService.data,
      validators: ["required"],
    },
  ];

  getFormConfig() {
    if (this.type === "ALUNO") return this.formConfigAluno;
    if (this.type === "PESQUISADOR") return this.formConfigPesquisador;
  }

  handleRegister() {
    if (this.appForm.invalid)
      return this.notify.show({ message: "Formulario incompleto.", type: "W" });
    let data = new Date(this.appForm.value["data"]).getFullYear();
    if (data > 2002)
      return this.notify.show({
        message: "Apenas maiores de 18 anos",
        type: "W",
      });
    let pais = (this.appForm.value["pais"] || ("" as string)).toUpperCase();
    if (pais !== "BRASIL")
      return this.notify.show({ message: "Pais deve ser brasil.", type: "W" });

    this.userService
      .register({ ...this.appForm.value, type: this.type })
      .subscribe();
  }

  ngOnInit(): void {
    this.formConfigPesquisador = this.commonFields.concat(
      this.formConfigPesquisador
    );
    this.formConfigAluno = this.commonFields.concat(this.formConfigAluno);
  }
}
