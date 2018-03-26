import { Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from "@angular/common/http";
import { Label } from '../resource-model';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'sw-label-list',
  templateUrl: './label-list.c.html',
  providers: [ConfirmationService, MessageService]
})
export class LabelListComponent implements OnInit {

  labels: any;
  selectedItem: any = {};
  addDialog: any = {};
  current: any = {};
  title: '标签';
  msgs: Message[] = [];

  constructor(private appService: AppService, private http:HttpClient, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.appService.titleEventEmitter.emit("标签列表");
    this.addDialog = {};
  }

  ngOnInit() {
    this.selectedItem = null;
    this.http
      .get("http://localhost:3000/labels")
      .subscribe(data => {this.labels = data;});
  }

  refresh(){
    this.selectedItem = null;
    this.http
      .get("http://localhost:3000/labels")
      .subscribe(data => {this.labels = data;});
  }

  add(){
    this.current = {
      name: '',
      enable: true
    };
    this.addDialog = {};
    this.addDialog.show = true;
    this.addDialog.title = '新增';
  }

  update(){
    this.current = Object.assign({}, this.selectedItem);
    this.addDialog = {};
    this.addDialog.show = true;
    this.addDialog.title = '修改';
  }

  addConfirm() {
    if(!this.current.enable)  this.current.enable = false;
    if(this.current.id!=undefined){
      this.http.put('http://localhost:3000/labels/label', this.current)
        .subscribe(
          (val) => {
            this.messageService.add({severity:'success', summary:'', detail:'修改标签成功!'});
            this.addDialog.show = false;
            this.refresh();
          },
          response => {
            this.messageService.add({severity:'error', summary:'', detail:'修改标签失败!'});
            this.addDialog.show = false;
          },
          () => {
            console.log("The POST observable is now completed.");
          });
    } else {
      this.http.post('http://localhost:3000/labels/label', this.current)
        .subscribe(
          (val) => {
            this.messageService.add({severity:'success', summary:'', detail:'新增标签成功!'});
            this.addDialog.show = false;
            this.refresh();
          },
          response => {
            this.messageService.add({severity:'error', summary:'', detail:'新增标签失败!'});
            this.addDialog.show = false;
          },
          () => {
            console.log("The PUT observable is now completed.");
            this.addDialog.show = false;
          });
    }

  }

  del() {
    this.current = Object.assign({}, this.selectedItem);
    this.confirmationService.confirm({
      message: '您确定要删除标签 ' + this.current.name + ' 吗?',
      accept: () => {
        this.http.delete('http://localhost:3000/labels/id/' + this.current.id, {})
          .subscribe(
            (val) => {
              this.messageService.add({ severity: 'success', summary: '', detail: '删除标签成功!' });
              this.refresh();
            },
            response => {
              this.messageService.add({severity:'error', summary:'', detail:'删除标签失败!'});
            },
            () => {
              console.log("The DELETE observable is now completed.");
            });
      }
    });
  }
}
