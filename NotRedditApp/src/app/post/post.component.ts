import {Component, Input, OnInit, NgZone} from '@angular/core';
import { Post } from '../post';
import {PostService} from '../post.service';
import {DomainService} from '../domain.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService,
              private domainService: DomainService) {
  }


  ngOnInit() {
    console.log(this.post);
    // this.getDomain(this.post.Domain);
    // console.log(this.selectedDomain);
    // this.domainService.getDomain(this.post.Domain).subscribe(data => this.selectedDomain = data);
    // console.log(this.domain);
  }

  updateRank(post: Post, up: boolean) {
    if (up) {
      post.Rank += 1;
    } else {
      post.Rank -= 1;
    }
    this.postService.updatePost(post);
    console.log(post);
  }

  /*getDomain(name) {
    this.domainService.getDomain(name).subscribe((data) => {
      this.selectedDomain = data;
    },
      (error) => {
        console.log(error);
      },
      () => {
        console.log(this.selectedDomain);
      });
  }*/
}
