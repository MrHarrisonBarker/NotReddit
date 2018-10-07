import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Post} from "../post";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

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
