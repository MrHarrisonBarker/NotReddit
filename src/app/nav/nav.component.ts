import {Component, OnInit} from '@angular/core';
import {GlobalsService} from '../globals.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    page: String;

    constructor(public globals: GlobalsService,
                private route: Router) {
    }

    ngOnInit() {
        this.page = this.route.url;
    }

    changeMode() {
        this.globals.isDark = this.globals.isDark ? false : true;
        console.log(this.globals.isDark);
    }

    changeContainer() {
        this.globals.isFluid = this.globals.isFluid ? false : true;
    }

}
