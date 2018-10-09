import {Component, OnInit} from '@angular/core';
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

    ngOnInit() {
        this.route.params.subscribe(params => {
            console.log(params['_id']);
            this.getPost(params['_id']);
            this.getDomain(this.selectedPost.Domain);
            console.log(this.domain.Icon);
        });
    }

    getPost(id) {
        console.log(id);
        this.postService.getPost(id)
            .subscribe(data => this.selectedPost = data,
                error => console.log(error));
    }

    removePost(post: Post) {
        this.postService.deletePost(post);
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
        this.domainService.getDomain(domainName).subscribe((domain) => {
            console.log(domainName);
            console.log(domain);
            this.domain = domain;
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
}
