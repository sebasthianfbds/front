import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { PostService } from "../../services/post.service";
import { TextAreaComponent } from "../text-area/text-area.component";
import { PermissionService } from "../../services/permission.service";
import { SettingsService } from "../../services/settings.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.scss"],
})
export class NewPostComponent implements OnInit {
  @Output() onHandlePostSubmit = new EventEmitter();

  @ViewChild("postComment", { static: false, read: TextAreaComponent })
  postComment: TextAreaComponent;

  title: string;
  local: string;
  url: string;
  data: string;
  palavrasChaves: string;

  @ViewChild("postButton", { static: false, read: ElementRef })
  postButton: ElementRef<HTMLButtonElement>;

  ngOnInit() {}

  dataS() {
    return [
      { value: "SAS", label: "SAS" },
      { value: "SQL", label: "SQL" },
      { value: "Ruby", label: "Ruby" },
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
      { value: "posterior distribution", label: "posterior distribution" },
      { value: "prior distribution", label: "prior distribution" },
      { value: "R", label: "R" },
      { value: "Root Mean Squared Error", label: "Root Mean Squared Error" },
      { value: "scalar", label: "scalar" },
      { value: "model", label: "model" },
      { value: "MATLAB", label: "MATLAB" },
      { value: "matrix", label: "matrix" },
      { value: "median", label: "median" },
      { value: "moving average", label: "moving average" },
      { value: "normal distribution", label: "normal distribution" },
      { value: "outlier", label: "outlier" },
      { value: "Pandas", label: "Pandas" },
      { value: "objective function", label: "objective function" },
      { value: "data science", label: "data science" },
      { value: "data structure", label: "data structure" },
      { value: "dependent variable", label: "dependent variable" },
      { value: "feature", label: "feature" },
      { value: "data wrangling", label: "data wrangling" },
      { value: "independent variable", label: "independent variable" },
      { value: "linear algebra", label: "linear algebra" },
      { value: "quantile, quartile", label: "quantile, quartile" },
      {
        value: "strata, stratified sampling",
        label: "strata, stratified sampling",
      },
    ];
  }

  handlePostSubmit() {
    const value = this.postComment.value;

    if (!value) {
      return;
    }

    this.postButton.nativeElement.disabled = true;

    this.post
      .publish({
        text: value,
        datep: this.data,
        locale: this.local,
        title: this.title,
        url: this.url,
        wordsKey: this.palavrasChaves,
      })
      .subscribe((result) => {
        this.onHandlePostSubmit.emit(this.postComment.value);
        this.postComment.value = "";
        this.postComment.focus();

        if (this.pdf) this.post.file(this.pdf, result).subscribe();
      })
      .add(() => {
        this.postButton.nativeElement.disabled = false;
      });
  }
  hasPermission() {
    return this.permissionService.isPesquisador();
  }

  pdf: FormData;
  pdfName: string;
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append("file", file);
      this.pdf = formData;
      this.pdfName = file.name;
    }
  }
  constructor(
    private post: PostService,
    private permissionService: SettingsService,
    private dataService: DataService
  ) {}
}
