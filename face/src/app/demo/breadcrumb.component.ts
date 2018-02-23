import { Component} from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-breadcrumb',
  template: `
  <h4>测试面包屑是否OK</h4>
  <!--<p>传入参数示例: data=[{'name':'样式', 'route':'/demo'},{'name':'面包屑', 'route':'/demo/breadcrumb'}]</p>-->
  <sw-ui-breadcrumb [crumbs]="data"></sw-ui-breadcrumb>
  `
})
export class BreadcrumbComponent {

  data: Array<any> = [];

  constructor(private demoService: DemoService){
    this.demoService.titleEventEmitter.emit("面包屑");

    this.data = [
      {'name':'样式', 'route':'/demo'},
      {'name':'面包屑', 'route':'/demo/breadcrumb'}
    ];
  }
}
