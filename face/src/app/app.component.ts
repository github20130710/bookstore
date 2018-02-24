import { Component } from '@angular/core';

import { MENUS } from './app-menu';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1 style="text-align:center">
      Welcome to {{ title }}!
    </h1>
    <ul class="nav nav-pills">
        <li>
          <a target="_blank" [routerLink]="['/demo/button']">组件使用样例</a>
        </li>
        <li>
          <a [routerLink]="['/books']">书城</a>
        </li>
        <li>
          <a [routerLink]="['/shelves']">我的书架</a>
        </li>
        <li>
          <a [routerLink]="['/orders']">我的订单</a>
        </li>
      </ul>
    <!--<sw-ui-menu></sw-ui-menu>-->
  </div>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  title = "Sophia Wong's BookStore";
}
