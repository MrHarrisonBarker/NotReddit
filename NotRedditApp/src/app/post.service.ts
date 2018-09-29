import  {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

import {Post} from './post';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private client: HttpClient) {
  }

  httpUrl = 'https://not-reddit-api.herokuapp.com/posts';

  getAllPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(this.httpUrl, httpOptions);
  }

  getPost(id): Observable<Post> {
    return this.client.get<Post>(`${this.httpUrl}/:${id}`, httpOptions);
  }

  addPost(post: Post) {
    this.client.post<Post>(this.httpUrl, post, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        });
  }

  deletePost(post: Post) {
    const url = `${this.httpUrl}/:${post._id}`;
    this.client.delete(url, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log( 'Error occured' + err );
        });
  }

  updatePost(post: Post) {
    const url = `${this.httpUrl}/${post._id}`;
    this.client.put<Post>(url, post, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log( 'Error occured' + err );
        });
  }
}
