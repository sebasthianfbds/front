import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { SnackbarService } from "../../services/snackbar.service";
import { PostService } from "../../services/post.service";
import { TextAreaComponent } from "../text-area/text-area.component";

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
      .subscribe(() => {
        this.onHandlePostSubmit.emit(this.postComment.value);
        this.postComment.value = "";
        this.postComment.focus();
      })
      .add(() => {
        this.postButton.nativeElement.disabled = false;
      });
  }
  constructor(private post: PostService) {}
}
