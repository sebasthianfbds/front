import { Component, OnInit, OnDestroy } from "@angular/core";
import { PostService } from "../../services/post.service";
import { IPost } from "src/app/core/post";
import { SocketService, SocketEvent } from "../../services/socket.service";
import { SessionService } from "../../services/session.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
  providers: [SocketService],
})
export class FeedComponent implements OnInit, OnDestroy {
  feedPosts: IPost[];
  feedPostsWait: IPost[] = [];
  loading = false;
  constructor(
    public postService: PostService,
    private socket: SocketService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.load();

    this.socket.initSocket();
    this.socket.onEvent(SocketEvent.ON_NEW_POST).subscribe((data) => {
      console.log("new post incomming");
      this.feedPostsWait.push(data[0]);
    });
    this.socket.emit(
      SocketEvent.ON_SEND_SESSION_ID,
      this.sessionService.getToken()
    );
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }

  load() {
    this.loading = true;
    this.postService
      .getAll()
      .subscribe((posts) => {
        this.feedPosts = posts;
      })
      .add(() => (this.loading = false));
  }

  handleShowNewPosts() {
    this.feedPosts = [...this.feedPostsWait, ...this.feedPosts];
    this.feedPostsWait = [];
  }

  showWaitPosts() {
    this.feedPosts = this.feedPostsWait.concat(this.feedPosts);
  }

  onHandlePostSubmit() {
    this.load();
  }
}
