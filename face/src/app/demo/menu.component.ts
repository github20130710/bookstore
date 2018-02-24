import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-menu',
  template: `
  sw-ui-menu   测试中
  `
})
export class MenuComponent {

  constructor(private demoService: DemoService){
    this.demoService.titleEventEmitter.emit("菜单");
  }

}
