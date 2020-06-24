import { Component, OnInit, Input } from "@angular/core";
import { IPost } from "src/app/core/post";
import { PostService } from "../../services/post.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-post-container",
  templateUrl: "./post-container.component.html",
  styleUrls: ["./post-container.component.scss"],
})
export class PostCcontainerComponent implements OnInit {
  @Input() loading = false;
  @Input() posts: IPost[] = [];

  onDeletePost(post: IPost) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          message: "Excluir publicação?",
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result)
          this.postService.delete(post._id).subscribe(() => {
            this.posts.splice(this.posts.indexOf(post), 1);
          });
      });
  }
  onEditPost(post: IPost) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          message: "Editar publicação?",
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.postService.edit(post).subscribe();
      });
  }
  constructor(private postService: PostService, private dialog: MatDialog) {}

  ngOnInit(): void {}
}
