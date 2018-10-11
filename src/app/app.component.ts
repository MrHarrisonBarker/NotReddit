import { Component } from '@angular/core';
import {GlobalsService} from './globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public globals: GlobalsService) {
    console.log(globals.isDark);
  }
}

