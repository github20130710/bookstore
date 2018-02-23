import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-grid',
  template: `
  <sw-ui-grid [config]="config"
          (tableChanged)="onChangeTable(config)"
          (cellClicked)="onCellClick($event)"
          [rows]="rows" [columns]="columns"></sw-ui-grid>
  `
})
export class GridComponent implements OnInit{

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {field: 'name', name: '名称', sort: 'asc'},
    {field: 'phone', name: '手机'},
    {field: 'email', name: '邮件'},
    {field: 'positions', name: '职位'}
  ];

  public config:any = {
    paging: true,
    currentPage: 1,
    itemsPerPage: 3,
    totalItems: 0
  };

  private data:Array<any> = [
    {
      name: "百变小咖1",
      phone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师",
    },{
      name: "百变小咖2",
      phone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师",
    },{
      name: "百变小咖3",
      phone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师",
    },{
      name: "百变小咖4",
      phone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师",
    },{
      name: "百变小咖5",
      phone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师",
    },{
      name: "百变小咖6",
      phone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师",
    }
  ];

  constructor(private demoService: DemoService){
    this.demoService.titleEventEmitter.emit("表格");
    this.rows = this.data;
    this.config.totalItems = this.rows.length;
  }

  public ngOnInit():void {
    //this.onChangeTable(this.config);
  }

  public onChangeTable(config:any):any {
    this.rows = this.data;
    this.config.totalItems = this.data.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}
