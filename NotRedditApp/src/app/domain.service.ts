import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Domain} from './domain';
import {Post} from "./post";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private client: HttpClient) { }

  httpUrl = 'https://not-reddit-api.herokuapp.com/domains';

  getAllDomains(): Observable<Domain[]> {
    return this.client.get<Domain[]>(this.httpUrl, httpOptions);
  }

  getDomain(name): Observable<Domain> {
    return this.client.get<Domain>(`${this.httpUrl}/${name}`, httpOptions);
  }

  startDomain(domain: Domain) {
    this.client.post<Post>(this.httpUrl, domain, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        });
  }
}
