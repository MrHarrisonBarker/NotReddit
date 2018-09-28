import { Comment } from './comment';

export class Post {
  _id: String;
  postTitle: String;
  postBody: String;
  Author: String;
  Rank: number;
  Visible: Boolean;
  Domain: String;
  Summary: String;
  Comments: Comment[];
}
