import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private client: HttpClient) { }

  httpUrl = 'https://not-reddit-api.herokuapp.com/posts';

  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>( this.httpUrl , httpOptions );
  }

}
