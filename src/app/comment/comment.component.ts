import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../comment';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  @Input() post: Post;
  add: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.add = false;
  }

  addComment() {
      this.add = this.add ? false : true;
  }

  deleteComment() {
    console.log('post --->');
    console.log(this.post);
    console.log('comment --->');
    console.log(this.comment);
    // this.postService.updatePost();
  }

}
