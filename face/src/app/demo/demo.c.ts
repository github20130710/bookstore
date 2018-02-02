import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  template: `<h4>DEMO - {{title}}</h4><br/>
  <ul class="nav-pills"><ol><a [routerLink]="['/demo/button']">按钮</a></ol><ol><a [routerLink]="['/demo/tab']">标签页</a></ol></ul>
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
