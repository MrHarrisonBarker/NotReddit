import {Component, Input, OnInit} from '@angular/core';
import {Domain} from '../domain';
import {GlobalsService} from '../globals.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() domain: Domain;

  constructor(public globals: GlobalsService) { }

  ngOnInit() {
  }

}
