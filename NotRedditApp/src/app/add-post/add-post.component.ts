import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addForm = new FormGroup({
    postTitle: new FormControl(''),
    postBody: new FormControl(''),
    Author: new FormControl(''),
    Visible: new FormControl(''),
    Domain: new FormControl(''),
  });

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(post: Post) {
    this.postService.addPost(post)
  }

}
