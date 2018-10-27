import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const httpUrl = 'https://not-reddit-api.herokuapp.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

/*  getUser(id) {
    this.client.get<User>(`${httpUrl}/${id}`, httpOptions);
  }*/

  getUserByName(name): Observable<User> {
    return this.client.get<User>(`${httpUrl}/${name}`, httpOptions);
  }
}
