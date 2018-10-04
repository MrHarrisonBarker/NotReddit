import {Component, Input, OnInit, NgZone} from '@angular/core';
import { Post } from '../post';
import {PostService} from '../post.service';
import {DomainService} from '../domain.service';
import {Domain} from "../domain";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  domain: Domain;

  constructor(private postService: PostService,
              private domainService: DomainService) {
  }


  ngOnInit() {
    console.log(this.post);
    this.getDomain(this.post.Domain);
  }

  updateRank(post: Post, up: boolean) {
    if (up) {
      post.Rank += 1;
    } else {
      post.Rank -= 1;
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
