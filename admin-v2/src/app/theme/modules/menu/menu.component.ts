import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sw-ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() menuItems:any = [];

  construct(){ }

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleMenu = new EventEmitter<any>();

  public hoverItem($event):void {
    this.itemHover.emit($event);
  }

  public menuToggle($event, item):boolean {
    $event.item = item;
    this.toggleMenu.emit($event);
    return false;
  }

}
