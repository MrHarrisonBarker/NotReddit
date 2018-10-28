import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {GlobalsService} from '../globals.service';
import {AuthService} from '../auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    posts: Post[];
    user: User;
    authUser;

    constructor(private postService: PostService,
                public globals: GlobalsService,
                public authService: AuthService,
                private userService: UserService) {
    }

    ngOnInit() {
        // this.getAllPosts();
        // this.orderPosts('postTitle', true);
        this.authService.user.subscribe(data => {
            this.userService.getUserByName(data.displayName).subscribe(user => {
                this.user = user;
                user.Subscriptions.forEach(sub => {
                    this.postService.getPostByDomain(sub.Name).subscribe(post => {
                        this.posts = post;
                        console.log(post);
                    });
                });
            });
        });
    }

    getAllPosts() {
        this.postService.getAllPosts().subscribe(posts => {
            // this.posts.splice(0, 10);
            console.log(posts);
            this.posts = posts;
            this.orderPosts('createdOn', true);
        });
    }

    changeContainer() {
        this.globals.isFluid = this.globals.isFluid ? false : true;
    }

    changeMode() {
        this.globals.isDark = this.globals.isDark ? false : true;
        console.log(this.globals.isDark);
    }

    getUser(name) {
        this.userService.getUserByName(name).subscribe(user => {
            console.log(user);
            this.user = user;
        });
    }

    getPosts() {
        console.log('Hello ello');
        console.log(this.user.Subscriptions);
        //this.user.Subscriptions.forEach(sub => {
        //    console.log(sub);
        //});
    }

    orderPosts(property, isAscending) {
        this.posts.sort(function (a, b) {
            const A = a[property];
            const B = b[property];

            let comparison = 0;
            if (isAscending) {
                if (A > B) {
                    comparison = 1;
                } else if (A < B) {
                    comparison = -1;
                }
                return comparison;
            } else {
                if (A < B) {
                    comparison = 1;
                } else if (A > B) {
                    comparison = -1;
                }
                return comparison;
            }

        });
    }

}
