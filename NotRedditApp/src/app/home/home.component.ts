import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  isFluid: boolean;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.isFluid = true;
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  changeContainer() {
    this.isFluid = this.isFluid ? false : true;
  }
}
