import { Component, OnInit, ViewChild} from '@angular/core';
import { ResourceService } from '../resource.service';
import { AppService } from '../../app.service';

@Component({
  selector: 'sw-label-list',
  templateUrl: './label-list.c.html',
  providers: [ ResourceService ]
})
export class LabelListComponent implements OnInit {

  labels: Array<any>;
  addDialog: any;
  current: any;

  constructor(private appService: AppService, private resService: ResourceService) {
    this.appService.titleEventEmitter.emit("标签列表");
    this.addDialog = {};
  }

  ngOnInit() {
    this.resService.getLabels().then(array => {this.labels = array});
  }

  add(){
    this.current = {};
    this.addDialog = {};
    this.addDialog.show = true;
    this.addDialog.title = '标签';
  }
}
