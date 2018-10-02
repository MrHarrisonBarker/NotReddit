import { Component, OnInit } from '@angular/core';
import {Domain} from '../domain';
import {DomainService} from '../domain.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {

  domains: Domain[];

  constructor(private domainService: DomainService) { }

  ngOnInit() {
    this.getAllDomains();
    console.log(this.domains);
  }

  getAllDomains() {
    this.domainService.getAllDomains().subscribe(data => this.domains = data);
  }

}
