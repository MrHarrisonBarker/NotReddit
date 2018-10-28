import {Component, Input, OnInit} from '@angular/core';
import {Domain} from '../domain';
import {GlobalsService} from '../globals.service';
import {UserService} from '../user.service';
import {User} from '../user';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() domain: Domain;
    user: User;

    constructor(public globals: GlobalsService,
                private userService: UserService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.user.subscribe(data => {
            console.log(data);
            this.getUser(data.displayName);
        });
        console.log(this.user);
    }

    subscribeDomain() {
        this.user.Subscriptions.push({
            Name: this.domain.Name,
            SubscribedFrom: new Date(),
            isMod: true
        });
        console.log(this.user)
        this.userService.updateUserByName(this.user);
    }

    getUser(name) {
        this.userService.getUserByName(name).subscribe(user => {
            console.log(user);
            this.user = user;
        });
    }

}
