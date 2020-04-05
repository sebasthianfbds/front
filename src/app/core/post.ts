export interface IPost {
  _id: string;
  comments: IComment[];
  date: string;
  text: string;
  user: IPostUser;
  showComments: boolean;
  commentLength: number;
  canEdit: boolean;
}

export interface IPostUser {
  _id: string;
  name: string;
  imageUrl: string;
}

export interface IComment {
  user: IPostUser;
  text: string;
}
