import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  isDark = false;
  isFluid = true;

  constructor() {
  }
}
