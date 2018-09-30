import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

import { Post } from '../post';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private location: Location) { }

  selectedPost: Post;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['_id']);
      this.getPost(params['_id']);
    });
  }

  getPost(id) {
    console.log(id);
    this.postService.getPost(id)
      .subscribe( data => this.selectedPost = data ,
        error => console.log(error));
  }

  removePost(post: Post) {
    this.postService.deletePost(post);
    console.log(post);
  }

  goBack(): void {
    this.location.back();
  }

}
