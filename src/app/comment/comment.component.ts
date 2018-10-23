import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  add: boolean;

  constructor() { }

  ngOnInit() {
    this.add = false;
  }

  addComment() {
      this.add = this.add ? false : true;
  }

}
