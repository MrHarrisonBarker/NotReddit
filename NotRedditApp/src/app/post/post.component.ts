import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../post';
import {PostService} from "../post.service";
import {DomainService} from "../domain.service";
import {Domain} from "../domain";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  public selectedDomain: Domain;

  constructor(private postService: PostService,
              private domainService: DomainService) { }


  ngOnInit() {
    console.log(this.post);
    this.getDomain(this.post.Domain);
  }

  updateRank(post: Post, up: boolean) {
    if (up) {
      post.Rank += 1000;
    } else {
      post.Rank -= 1000;
    }
    this.postService.updatePost(post);
    console.log(post);
  }

  getDomain(name) {
    this.domainService.getDomain(name).subscribe((data) => {
      console.log(data);
      this.selectedDomain = data;
    });
  }
}
