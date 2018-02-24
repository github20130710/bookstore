import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-ui-menu',
  templateUrl: './menu.html'
})
export class MenuComponent {

  @Input() sidebarCollapsed:boolean = false;

}
