export class Domain {
    _id: String;
    Name: String;
    Title: String;
    Topic: String;
    Description: String;
    Colour: String;
    Content: String;
    Icon: String;
    Subscribers: number;
    Tags: String[];
    Reports: number;
    isNSFW: boolean;
    ViewCount: number;
    isRemoved: boolean;
    DefaultOrder: String;
    PinnedPosts: [{
        id: String;
    }];
    Mods: [{
        id: String;
        DisplayName: String;
    }];
    SideBar: {
        Title: String;
        Body: String;
        Links: String[];
        PromotedSubs: String[];
    };
}
