import {Component, OnInit} from '@angular/core';
import {DomainService} from '../domain.service';
import {Domain} from '../domain';
import {GlobalsService} from '../globals.service';

@Component({
    selector: 'app-domain-list',
    templateUrl: './domain-list.component.html',
    styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {

    domains: Domain[];

    constructor(private domainService: DomainService,
                public globals: GlobalsService) {
    }

    ngOnInit() {
        this.getAllDomains();
    }

    getAllDomains() {
        this.domainService.getAllDomains().subscribe(domain => this.domains = domain);
    }

    changeContainer() {
        this.globals.isFluid = this.globals.isFluid ? false : true;
    }

    changeMode() {
        this.globals.isDark = this.globals.isDark ? false : true;
        console.log(this.globals.isDark);
    }

    orderDomains(property, isAscending) {
        this.domains.sort(function (a, b) {
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
