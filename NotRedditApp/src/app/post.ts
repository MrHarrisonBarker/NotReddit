import { Comment } from './comment';

export class Post {
  _id: String;
  postTitle: String;
  postBody: String;
  Author: String;
  Rank: Number;
  Visible: Boolean;
  Domain: String;
  Summary: String;
  Comments: Comment[];
}
