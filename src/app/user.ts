import {Post} from './post';
import {Subscription} from './subscription';

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
    Subscriptions: [Subscription];
    Posts: Post[];
}
