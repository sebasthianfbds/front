import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { IPost } from "src/app/core/post";
import { map } from "rxjs/operators";
import { CommentService } from "../../services/comment.service";
import { SocketService, SocketEvent } from "../../services/socket.service";
import { TextAreaComponent } from "../text-area/text-area.component";
import { PostService } from "../../services/post.service";
import * as FileSaver from "file-saver";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
  providers: [SocketService],
})
export class PostCardComponent implements OnInit, OnDestroy {
  @Input() post: IPost;
  loadingComments = false;
  @Output() onDeletePost = new EventEmitter<IPost>();
  @Output() onEditPost = new EventEmitter<IPost>();

  @ViewChild("postComment", { static: false, read: TextAreaComponent })
  postComment: TextAreaComponent;
  processing = false;
  editing = false;
  handleSubmitComment() {
    if (this.processing || !this.postComment.value) return;
    this.processing = true;
    this.commentService
      .comment({
        post_id: this.post._id,
        text: this.postComment.value,
      })
      .pipe(map(() => (this.postComment.value = "")))
      .subscribe()
      .add(() => (this.processing = false));
  }

  handleShowComments() {
    this.post.showComments = !this.post.showComments;
    if (this.post.showComments) {
      this.loadComments();
      this.socket.initSocket();
      this.socket.emit(SocketEvent.ON_POST_ID, this.post._id);
      this.socket.onEvent(SocketEvent.ON_NEW_COMMENT).subscribe((data) => {
        this.post.commentLength += 1;
        this.post.comments = [data, ...this.post.comments];
      });
    } else this.socket.disconnect();
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }

  loadComments() {
    this.loadingComments = true;
    this.commentService
      .loadComments(this.post._id)
      .subscribe((data) => {
        this.post.comments = data;
        this.post.commentLength = this.post.comments.length;
      })
      .add(() => (this.loadingComments = false));
  }

  handleKeyUp(event: any) {
    if (event.keyCode === 13) this.handleSubmitComment();
  }

  handleDeletePost() {
    this.onDeletePost.emit(this.post);
  }

  handleLike() {
    this.postService.like(this.post._id).subscribe(() => {
      this.post.liked ? this.post.likesLength-- : this.post.likesLength++;
      this.post.liked = !this.post.liked;
    });
  }

  handleEditPost() {
    this.post.text = document.getElementById("div-post-text").innerHTML;
    this.post.title = document.getElementById("div-post-title").innerHTML;
    this.post.locale = document.getElementById("div-post-locale").innerHTML;
    this.post.url = document.getElementById("div-post-url").innerHTML;
    this.post.wordsKey = document.getElementById("div-post-wordsKey").innerHTML;
    this.post.datep = document.getElementById("div-post-datep").innerHTML;

    this.onEditPost.emit(this.post);
  }

  download() {
    this.postService.download(this.post._id).subscribe((result) => {
      let blob: any = new Blob([result], {
        type: "text/json; charset=utf-8",
      });
      FileSaver.saveAs(blob, this.post.pdf);
    });
  }

  constructor(
    private commentService: CommentService,
    private socket: SocketService,
    private postService: PostService
  ) {}

  ngOnInit() {}
}
