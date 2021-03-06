import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { SnackbarService } from "src/app/shared/services/snackbar.service";
import { SettingsService } from "src/app/shared/services/settings.service";
import { FormComponent } from "src/app/shared/components/form/form.component";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  loading = false;
  @Output() onSubmitChange = new EventEmitter<any>();
  @ViewChild("appForm", { static: false, read: FormComponent })
  appForm: FormComponent;
  @ViewChild("updateButton", { static: false, read: ElementRef })
  updateButton: ElementRef<HTMLButtonElement>;
  pdf;

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
      validators: [],
    },
    {
      label: "Image url",
      name: "imageUrl",
      type: "text",
      validators: [],
    },
    {
      label: "Curriculo",
      name: "pdf",
      type: "text",
      validators: [],
      readOnly: true,
    },
  ];

  handleUpdateSubmit() {
    if (this.appForm.invalid) return;
    this.updateButton.nativeElement.disabled = true;

    if (this.pdf) this.settingsService.file(this.pdf).subscribe();

    this.settingsService
      .update(this.appForm.value)
      .subscribe(() => {
        this.onSubmitChange.emit();
        this.snack.show({ message: "Dados alterados com sucesso.", type: "S" });
      })
      .add(() => (this.updateButton.nativeElement.disabled = false));
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append("file", file);
      this.pdf = formData;
    }
  }
  ngOnInit() {
    if (this.settingsService.isPesquisador()) {
      this.formConfig.push({
        label: "Details",
        name: "details",
        type: "textarea",
        validators: [],
      });
    }
  }
  constructor(
    private snack: SnackbarService,
    public settingsService: SettingsService
  ) {}
}
