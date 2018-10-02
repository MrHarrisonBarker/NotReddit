import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  posts: Post[];
  domain: Domain;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private domainService: DomainService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const domainName = params['domain'];

      this.getDomain(domainName);

      console.log('domain: ' + this.domain);

      // this.getPosts(domainName);
      // console.log(this.posts);
    });
  }

  getPosts(domainName) {
    this.postService.getPostByDomain(domainName).subscribe(posts => this.posts = posts);
  }

  getDomain(domainName) {
    this.domainService.getDomain(domainName).subscribe( (domain) => {
      console.log(domainName);
      console.log(domain);
      this.domain = domain;
    });
  }

  updateRank(post: Post, up: boolean) {
    if (up) {
      post.Rank ++;
    } else {
      post.Rank --;
    }
    this.postService.updatePost(post);
    console.log(post);
  }

}
