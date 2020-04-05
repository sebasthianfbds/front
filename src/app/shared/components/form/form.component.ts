import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  loading = false;
  _formGroup: FormGroup = this.fb.group({});
  _config: any;
  private dataLoaded = false;
  @Input() set formConfig(config) {
    //console.log(config);
    this._config = config;
    if (config) {
      for (let field of config) {
        var validators = [];
        for (let validator of field.validators as string[])
          if (validator.toLocaleLowerCase() === "required")
            validators.push(Validators.required);
          else if (validator.toLocaleLowerCase() === "email")
            validators.push(Validators.email);
        this._formGroup.addControl(
          field.name,
          new FormControl(field.defaultValue || "", validators)
        );
      }
    }
  }

  @Input() set loadData(funcao: any) {
    if (!this.dataLoaded) {
      funcao
        .subscribe(data => {
          for (let field of this._config) {
            if (!data[field.name]) data[field.name] = "";
          }
          Object.getOwnPropertyNames(data).forEach(attr => {
            if (!this._formGroup.contains(attr)) delete data[attr];
          });
          this._formGroup.setValue(data);
        })
        .add(() => (this.loading = false));
      this.dataLoaded = true;
    }
  }

  get invalid() {
    return this._formGroup.invalid;
  }

  get value() {
    return this._formGroup.value;
  }

  formError(controlName: string, validador: string): boolean {
    let control = this._formGroup.controls[controlName];

    if (control && control.errors) return control.errors[validador];
    return false;
  }

  getErrorMessage(validator: string) {
    if (validator === "required") {
      return "Este campo é requerido.";
    } else if (validator === "email") {
      return "E-mail inválido.";
    } else {
      return "";
    }
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
