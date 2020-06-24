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

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.scss"],
})
export class NewPostComponent implements OnInit {
  @Output() onHandlePostSubmit = new EventEmitter();

  @ViewChild("postComment", { static: false, read: TextAreaComponent })
  postComment: TextAreaComponent;

  @ViewChild("postButton", { static: false, read: ElementRef })
  postButton: ElementRef<HTMLButtonElement>;

  ngOnInit() {}

  handlePostSubmit() {
    const value = this.postComment.value;

    if (!value) {
      return;
    }

    this.postButton.nativeElement.disabled = true;

    this.post
      .publish({
        text: value,
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
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append("file", file);
      this.pdf = formData;
    }
  }
  constructor(
    private post: PostService,
    private permissionService: SettingsService
  ) {}
}
