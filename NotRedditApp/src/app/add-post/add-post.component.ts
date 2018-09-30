import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addForm: FormGroup;
  domains: Domain[];

  constructor(private postService: PostService,
              private formBuilder: FormBuilder,
              private domainService: DomainService) {
    this.addForm = formBuilder.group({
      'postTitle':  ['', Validators.required ],
      'postBody': [''],
      'Visible': ['', Validators.required ],
      'Domain': ['', Validators.required ],
      'url': ['']
    });
  }

  ngOnInit() {
    // this.getAllDomains();
  }

  addPost(post: Post) {
    this.postService.addPost(post);
    console.log('Post: ' + post);
  }

  getAllDomains() {
    this.domainService.getAllDomains().subscribe(data => this.domains = data);
    console.log(this.domains);
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
    post.url = submittedPost.url;

    console.log(submittedPost);
    console.log(post);

    this.addPost(post);
  }

}
