import { Component, OnInit } from '@angular/core';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {

  domains: Domain[];

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getAllDomains();
  }

  getAllDomains() {
    this.domainService.getAllDomains().subscribe(domain => this.domains = domain);
  }

}
