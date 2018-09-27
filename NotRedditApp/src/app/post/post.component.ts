import { Component, OnInit , Input } from '@angular/core';
import { PostService } from "../post.service";

import { Post } from "../post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: Post[];
  @Input() post: Post;

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAllPosts()
      .subscribe( data => this.posts = data,
        error => console.log('Error: ' + error))
  }

}
