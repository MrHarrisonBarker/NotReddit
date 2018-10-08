import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {GlobalsService} from '../globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];


  constructor(private postService: PostService,
              public globals: GlobalsService) {
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts.sort(function (a, b) {
        const titleA = a.createdOn;
        const titleB = b.createdOn;

        let comparison = 0;
        if (titleA > titleB) {
          comparison = 1;
        } else if (titleA < titleB) {
          comparison = -1;
        }
        return comparison;
      });
    });
  }

  changeContainer() {
    this.globals.isFluid = this.globals.isFluid ? false : true;
  }

  changeMode() {
    this.globals.isDark = this.globals.isDark ? false : true;
    console.log(this.globals.isDark);
  }

  orderPosts(property, isAscending) {
    this.posts.sort(function (a, b) {
      const A = a[property];
      const B = b[property];

      let comparison = 0;
      if (isAscending) {
        if (A > B) {
          comparison = 1;
        } else if (A < B) {
          comparison = -1;
        }
        return comparison;
      } else {
        if (A < B) {
          comparison = 1;
        } else if (A > B) {
          comparison = -1;
        }
        return comparison;
      }

    });
  }

}
