import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  isDark: boolean;
  isFluid: boolean;

  constructor() {
    this.isDark = false;
    this.isFluid = true;
  }
}
