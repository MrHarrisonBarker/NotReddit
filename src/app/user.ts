import {Post} from './post';

export class User {
    _id: String;
    DisplayName: String;
    Score: number;
    isActive: boolean;
    isDarkMode: boolean;
    Email: String;
    url: String;
    Currency: number;
    isDev: boolean;
    Icon: String;
    numPosts: number;
    Subscriptions: [{
        Name: String;
        SubscribedFrom: String;
        isMod: boolean;
    }];
    Posts: Post[];
}
