export class Comment {
    _id: String;
    Body: String;
    createdOn: Date;
    Author: {
        DisplayName: String;
    };
    Comment: Comment[];
}
