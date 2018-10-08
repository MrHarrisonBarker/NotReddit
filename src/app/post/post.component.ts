import {Component, Input, OnInit, NgZone} from '@angular/core';
import { Post } from '../post';
import {PostService} from '../post.service';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';
import {GlobalsService} from '../globals.service';

// TODO: Crosspost

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  domain: Domain;
  voteStatus: String;
  hasVoteChanged: Boolean;

  constructor(private postService: PostService,
              private domainService: DomainService,
              public globals: GlobalsService) {
  }


  ngOnInit() {
    console.log(this.post);
    this.getDomain(this.post.Domain);
  }

  updateRank(post: Post, up: boolean) {
    if (up) {
      if (this.hasVoteChanged){
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

  getDomain(domainName) {
    this.domainService.getDomain(domainName).subscribe( (domain) => {
      console.log(domainName);
      console.log(domain);
      this.domain = domain;
    });
  }
}
