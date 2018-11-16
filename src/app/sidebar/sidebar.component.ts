import {Component, Input, OnInit} from '@angular/core';
import {Domain} from '../domain';
import {GlobalsService} from '../globals.service';
import {UserService} from '../user.service';
import {User} from '../user';
import {Subscription} from '../subscription';

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
        const sub = new Subscription();

        sub.Name = this.domain.Name;
        sub.SubscribedFrom = new Date();
        sub.isMod = true;

        this.user.Subscriptions.push(sub);
        console.log(this.user);
        this.userService.updateUserByName(this.user);
    }

}
