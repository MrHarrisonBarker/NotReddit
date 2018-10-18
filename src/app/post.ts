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
    Comments: [{
        id: String;
        Body: String;
        createdOn: Date;
        Author: {
            DisplayName: String;
        };
    }];
    ContentType: {
        Name: String;
        Source: String;
    };
    CrossPost: {
        isCrossPost: Boolean;
        user: String;
        post: String;
    };
}
