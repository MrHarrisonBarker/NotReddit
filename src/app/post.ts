import {Comment} from './comment';
import {Crosspost} from './crosspost';

export class Post {
    _id: String;
    postTitle: String;
    postBody: String;
    Author: {
        DisplayName: String;
    };
    Rank: number;
    Visible: Boolean;
    Domain: String;
    Summary: String;
    url: String;
    createdOn: Date;
    Tags: String[];
    Reports: number;
    isNSFW: boolean;
    viewCount: number;
    isRemoved: boolean;
    Comments: Comment[];
    ContentType: {
        Name: String;
        Source: String;
    };
    CrossPost: Crosspost;
}
