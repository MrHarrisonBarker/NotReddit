import {Comment} from './comment';
import {Cross} from './cross';
import {User} from './user';

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
    createdOn: Date;
    url: String;
    Content: String;
    CrossPost: Cross;
    User: User;
}
