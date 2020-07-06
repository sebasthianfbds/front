export interface IPost {
  _id: string;
  comments: IComment[];
  date: string;
  text: string;
  user: IPostUser;
  showComments: boolean;
  commentLength: number;
  likesLength: number;
  canEdit: boolean;
  liked: boolean;
  pdf?: string;
  title: string;
  datep: string;
  locale: string;
  url: string;
  wordsKey: string;
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
