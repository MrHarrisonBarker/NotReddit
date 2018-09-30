import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['domain']);
      this.getPosts(params['domain']);
    });
  }

  getPosts(domain) {
    this.postService.getPostByDomain(domain).subscribe(posts => this.posts = posts);
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
