import {Component, Input, OnInit} from '@angular/core';
import {Domain} from '../domain';
import {GlobalsService} from '../globals.service';
import {UserService} from '../user.service';
import {User} from '../user';
import {AuthService} from '../auth.service';
import {InitialPipe} from 'ngx-pipes';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() domain: Domain;
    @Input() isHome: boolean;
    @Input() user: User;

    constructor(public globals: GlobalsService,
                private userService: UserService) {
    }

    ngOnInit() {
    }

    subscribeDomain() {
        this.user.Subscriptions.push({
            Name: this.domain.Name,
            SubscribedFrom: new Date(),
            isMod: true
        });
        console.log(this.user);
        this.userService.updateUserByName(this.user);
    }

}
