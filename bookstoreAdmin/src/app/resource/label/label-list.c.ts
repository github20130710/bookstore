import { Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'sw-label-list',
  templateUrl: './label-list.c.html',
  providers: [  ]
})
export class LabelListComponent implements OnInit {

  labels: Array<any>;
  addDialog: any;
  current: any;
  title: '标签';

  constructor(private appService: AppService, private http:HttpClient) {
    this.appService.titleEventEmitter.emit("标签列表");
    this.addDialog = {};
  }

  ngOnInit() {
     this.http
      .get("http://localhost:3000/labels")
      .subscribe(data => {this.labels = data;});
  }

  add(){
    this.current = {};
    this.addDialog = {};
    this.addDialog.show = true;
    this.addDialog.title = '标签';
  }
}
