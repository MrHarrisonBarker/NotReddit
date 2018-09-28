import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';
import {Post} from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  updateRank(post: Post, up: boolean) {
    if (up) {
      post.Rank ++;
    } else {
      post.Rank --;
    }
    this.postService.updatePost(post);
  }
}
