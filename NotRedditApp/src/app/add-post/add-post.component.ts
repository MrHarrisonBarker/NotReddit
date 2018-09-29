import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addForm: FormGroup;

  constructor(private postService: PostService,
              private formBuilder: FormBuilder) {
    this.addForm = formBuilder.group({
      'postTitle':  ['', Validators.required ],
      'postBody': ['', Validators.required ],
      'Visible': [''],
      'Domain': ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  addPost(post: Post) {
    this.postService.addPost(post);
    console.log('Post: ' + post);
  }

  submitForm() {
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
  }

}
