import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  domains: Domain[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(posts => this.posts = posts);
  }
}
