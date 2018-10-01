import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../post';
import {PostService} from "../post.service";
import {DomainService} from "../domain.service";
import {Domain} from "../domain";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  domains: Domain[];

  constructor(private postService: PostService,
              private domainService: DomainService) { }

  selectedPost: Post;

  ngOnInit() {
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

  getDomain(name) {
    this.domains.push(this.domainService.getDomain(name));
  }
}
