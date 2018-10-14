import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {Domain} from '../domain';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';
import {DomainService} from '../domain.service';
import {GlobalsService} from '../globals.service';

@Component({
    selector: 'app-domain',
    templateUrl: './domain.component.html',
    styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {

    posts: Post[];
    domain: Domain;

    constructor(private route: ActivatedRoute,
                private domainService: DomainService,
                private postService: PostService,
                public globals: GlobalsService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const domainName = params['domain'];

            this.getDomain(domainName);

            console.log(this.domain);

            if (domainName === 'all') {
                this.getAllPosts();
            } else {
                this.getPosts(domainName);
            }

            console.log(this.posts);
        });
    }

    getPosts(domainName) {
        this.postService.getPostByDomain(domainName).subscribe(posts => this.posts = posts);
    }

    getAllPosts() {
        this.postService.getAllPosts().subscribe( posts => this.posts = posts);
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
