import { Component } from "@angular/core";
import { DemoService } from "./demo.service";

@Component({
  selector: 'app-demo',
  template: `<h4 swHighlight>DEMO - {{title}}</h4><br/>
  <ul class="nav nav-pills"><li><a routerLink="/demo/button">按钮</a></li>
  <li><a routerLink="/demo/tab">标签页</a></li>
  <li><a routerLink="/demo/grid">表格</a></li>
  <li><a routerLink="/demo/carousel">旋转木马</a></li>
  <li><a routerLink="/demo/breadcrumb">面包屑</a></li>
  <li><a routerLink="/demo/menu">菜单</a></li></ul>
  <div class="container"><router-outlet></router-outlet></div>`
})
export class DemoComponent {

  title: any;

  constructor(private demoService: DemoService) {
    this.demoService.titleEventEmitter.subscribe((value: string) => {
      if (value) {
        this.title = value;
      }
    })
  }
}
