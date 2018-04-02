import { Component } from '@angular/core';
import { MENUS } from './app-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor() { }

  private menuItems = MENUS;

}
