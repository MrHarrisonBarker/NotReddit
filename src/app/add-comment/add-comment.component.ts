import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../comment';
import {PostService} from '../post.service';
import {Post} from '../post';
import {AuthService} from '../auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  addCommentForm: FormGroup;
  user;
  params;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private authService: AuthService,
              private route: ActivatedRoute) {
    this.addCommentForm = formBuilder.group({
       'Body': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.authService.user.subscribe(user => this.user = user);
    this.route.params.subscribe(params => this.params = params );
  }

  submitComment() {
    const comment = new Comment();
    const post = this.getPost(this.params['_id']);
    const submittedComment = this.addCommentForm.value;

    console.log(submittedComment);

    comment.Body = submittedComment.Body;
    comment.Author = this.user.DisplayName;
    console.log('hello hello');
    post.Comments = post.Comments.push(comment);
    console.log('bye bye');
    this.updatePost(post);

    console.log(comment);
    console.log(post);

  }

  updatePost(post) {
    this.postService.updatePost(post);
  }

  getPost(id): Post {
    this.postService.getPost(id).subscribe(post => {
      console.log(post);
      return post;
    });
    return null;
  }

}
