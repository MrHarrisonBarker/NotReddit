import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Domain} from './domain';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
    const domains = this.client.get<Domain[]>(this.httpUrl, httpOptions);
    console.log(domains);
    return domains;
  }

  getDomain(name): Observable<Domain> {
    const domain = this.client.get<Domain>(`${this.httpUrl}/${name}`, httpOptions);
    return domain;
  }
}
