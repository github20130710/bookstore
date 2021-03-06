import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menuItem/menuItem.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent
  ],
  exports: [
    MenuComponent,
    MenuItemComponent
  ]
})
export class MenuModule { }
