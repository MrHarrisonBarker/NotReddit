import {Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Post} from '../post';
import {GlobalsService} from '../globals.service';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

    constructor(private postService: PostService,
                private route: ActivatedRoute,
                private location: Location,
                public globals: GlobalsService,
                private domainService: DomainService) {
    }

    selectedPost: Post;
    domain: Domain;
    voteStatus: String;
    hasVoteChanged: Boolean;
    params;
    add: Boolean;

    ngOnInit() {
        this.add = false;
        this.route.params.subscribe(params => this.params = params );
        this.getPost(this.params['_id']);
        console.log('hello ');
        // this.getDomain(this.selectedPost.Domain);
        // console.log('bye bye');
        // console.log(this.domain);
    }

    getPost(id) {
        console.log(id);
        this.postService.getPost(id)
            .subscribe(data => {
                console.log(data);
                this.selectedPost = data;
                },
                error => console.log(error));
    }

    removePost(post: Post) {
        this.postService.deletePost(post);
        this.goBack();
        console.log(post);
    }

    goBack(): void {
        this.location.back();
    }

    changeContainer() {
        this.globals.isFluid = this.globals.isFluid ? false : true;
    }

    changeMode() {
        this.globals.isDark = this.globals.isDark ? false : true;
        console.log(this.globals.isDark);
    }

    getDomain(domainName) {
        console.log(domainName);
        this.domainService.getDomain(domainName).subscribe((domain) => {
            console.log(domain);
            this.domain = domain;
        }, error => {
            console.log(error);
        });
    }

    updateRank(post: Post, up: boolean) {
        if (up) {
            if (this.hasVoteChanged) {
                post.Rank += 1;
                this.hasVoteChanged = false;
                this.voteStatus = 'black';
            } else {
                post.Rank += 1;
                this.hasVoteChanged = true;
                this.voteStatus = 'green';
            }
        } else {
            if (this.hasVoteChanged) {
                post.Rank -= 1;
                this.hasVoteChanged = false;
                this.voteStatus = 'black';
            } else {
                post.Rank -= 1;
                this.hasVoteChanged = true;
                this.voteStatus = 'red';
            }

        }
        this.postService.updatePost(post);
        console.log(post);
    }

    addComment() {
        this.add = this.add ? false : true;
    }
}
