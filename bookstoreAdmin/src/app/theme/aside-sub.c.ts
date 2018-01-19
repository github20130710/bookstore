import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
import  { MenuData }    from '../theme/main-data';
/**
 * 菜单树组件
 */
@Component({
    selector: 'sw-aside-sub',
    template: `
    <ul class="sub-menu" [hidden]="!data.isExpend"  *ngIf="!isLeaf(data)">
          <li *ngFor="let item of data.children">
              <a  (click)="itemClicked(item);">
                  <i class="fa " [ngClass]="item.icon"></i> <span>{{item.name}}</span>
                  <i style="margin-top:3px;width:17px" class="fa  pull-right"  [ngClass]="{'fa-angle-down': !isLeaf(item) && item.isExpend, 'fa-angle-left': !isLeaf(item) && !item.isExpend}"></i>
               </a>
              <sw-aside-sub [data]="item"></sw-aside-sub>
          </li>
    </ul>
  `
})

export class AsideSubComponent {

    @Input() data:MenuData;


    constructor(private router: Router) {}


    /**
     * 是否有子节点
     * @param item
     */
    isLeaf(item: MenuData) {
        return !item.children || !item.children.length;
    }

    /**
     * 点击
     * @param item
     */
    itemClicked(item: MenuData) {
        if (!this.isLeaf(item)) {
            item.isExpend = !item.isExpend;
        } else {
            this.router.navigate([item.url]);
        }
    }
}
