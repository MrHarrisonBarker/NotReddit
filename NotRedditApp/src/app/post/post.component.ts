import { Component, OnInit , Input } from '@angular/core';
import { PostService } from '../post.service';

import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  @Input() id: String;
  selectedPost: Post;

  ngOnInit() {

  }

  getPost(id) {
    this.postService.getPost(id)
      .subscribe( data => this.selectedPost = data ,
        error => console.log(error));
  }

}
