import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {Domain} from '../domain';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';
import {DomainService} from '../domain.service';
import {GlobalsService} from '../globals.service';
import {AuthService} from '../auth.service';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
    selector: 'app-domain',
    templateUrl: './domain.component.html',
    styleUrls: ['./domain.component.scss'],
    providers: [GlobalsService]
})
export class DomainComponent implements OnInit {

    posts: Post[];
    domain: Domain;
    user: User;

    constructor(private route: ActivatedRoute,
                private domainService: DomainService,
                private postService: PostService,
                public globals: GlobalsService,
                public authService: AuthService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.authService.user.subscribe(data => {
            this.userService.getUserByName(data.displayName).subscribe(user => {
                this.user = user;
            });
        });

        this.route.params.subscribe(params => {
            const domainName = params['domain'];

            console.log(domainName);

            this.getDomain(domainName);

            console.log(this.domain);

            if (domainName === 'all') {
                console.log('thi is all');
                this.getAllPosts();
            } else {
                this.getPosts(domainName);
            }

            console.log(this.posts);
            console.log('bye');
        });
    }

    getPosts(domainName) {
        this.postService.getPostByDomain(domainName).subscribe(posts => this.posts = posts);
    }

    getAllPosts() {
        this.postService.getAllPosts().subscribe( posts => {
            console.log(posts);
            this.posts = posts;
        });
    }

    getDomain(domainName) {
        this.domainService.getDomain(domainName).subscribe(domain => this.domain = domain );
    }

    changeContainer() {
        this.globals.isFluid = this.globals.isFluid ? false : true;
    }

    changeMode() {
        this.globals.isDark = this.globals.isDark ? false : true;
        console.log(this.globals.isDark);
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
