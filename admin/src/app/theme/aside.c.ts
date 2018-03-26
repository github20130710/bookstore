import { Component, OnInit, Input } from '@angular/core';
import  { MenuData }    from '../theme/main-data';

/**
 * 左侧菜单组件
 */
@Component({
    selector: 'sw-aside',
    template: `
  <div class="nav">
    <ul  class="menu">
        <li *ngFor="let item of data">
            <a  (click)="itemClicked(item);">
              <i style="margin-top:3px;width:17px" class="fa  pull-right"  [ngClass]="{'fa-angle-down': !isLeaf(item) && item.isExpend, 'fa-angle-left': !isLeaf(item) && !item.isExpend}"></i>
              <i class="fa " [ngClass]="item.icon"></i> <span>{{item.name}}</span>
              </a>
            <sw-aside-sub [data]="item"></sw-aside-sub>
        </li>
    </ul>
  </div>
  `
})

export class AsideComponent implements OnInit {

    //输入数据
    @Input() data:Array<MenuData>;

    //所有数据
    private  allData:Array<MenuData>;

    /**
     * 构造方法
     */
    constructor() {}

    /**
     * 初始化
     */
    ngOnInit() {
        this.allData=this.data;
    }

    /**
     * 是否有子节点
     * @param item
     */
    isLeaf(item:MenuData){
        return !item.children || !item.children.length;
    }

    /**
     * 点击
     * @param item
     */
    itemClicked(item:MenuData){
        if(!this.isLeaf(item)) {
            for(let obj of this.data){
                if(obj.id!=item.id){
                    obj.isExpend=false;
                }
            }
            item.isExpend = !item.isExpend;
        }
    }

}