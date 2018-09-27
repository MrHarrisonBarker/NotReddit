import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: object[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe( data => this.posts = data,
        error => console.log('Error: ' + error))
  }

}
