import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  selectedPost: Post;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['_id']);
      this.getPost(params['_id']);
    });
  }

  updatePost(post: Post) {
    this.postService.updatePost(post);
    console.log(post);
  }

  getPost(id) {
    console.log(id);
    this.postService.getPost(id)
      .subscribe( data => this.selectedPost = data ,
        error => console.log(error));
  }

  goBack(): void {
    this.location.back();
  }

  /*submitForm() {
    const post = new Post();
    const submittedPost = this.addForm.value;

    post.postTitle = submittedPost.postTitle;
    post.postBody = submittedPost.postBody;
    post.Author = 'Harrison';
    post.Rank = 0;
    post.Visible = submittedPost.Visible;
    post.Domain = submittedPost.Domain;
    post.Summary = submittedPost.postBody.substr(0, 99);

    console.log(submittedPost);
    console.log(post);

    this.addPost(post);
  }*/
}
