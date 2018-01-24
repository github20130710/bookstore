import { Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from "@angular/common/http";
import { Category } from '../resource-model';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'sw-category-list',
  templateUrl: './category-list.c.html',
  providers: [ConfirmationService, MessageService]
})
export class CategoryListComponent implements OnInit {

  categories: any;
  selectedItem: any = {};
  addDialog: any = {};
  current: any = {};
  title: '分类';
  msgs: Message[] = [];

  constructor(private appService: AppService, private http:HttpClient, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.appService.titleEventEmitter.emit("分类列表");
    this.addDialog = {};
  }

  ngOnInit() {
    this.selectedItem = null;
    this.http
      .get("http://localhost:3000/categories")
      .subscribe(data => {this.categories = data;});
  }

  refresh(){
    this.selectedItem = null;
    this.http
      .get("http://localhost:3000/categories")
      .subscribe(data => {this.categories = data;});
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
      this.http.put('http://localhost:3000/categories/category', this.current)
        .subscribe(
          (val) => {
            this.messageService.add({severity:'success', summary:'', detail:'修改分类成功!'});
            this.addDialog.show = false;
            this.refresh();
          },
          response => {
            this.messageService.add({severity:'error', summary:'', detail:'修改分类失败!'});
            this.addDialog.show = false;
          },
          () => {
            console.log("The PUT observable is now completed.");
          });
    } else {
      this.http.post('http://localhost:3000/categories/category', this.current)
        .subscribe(
          (val) => {
            this.messageService.add({severity:'success', summary:'', detail:'新增分类成功!'});
            this.addDialog.show = false;
            this.refresh();
          },
          response => {
            this.messageService.add({severity:'error', summary:'', detail:'新增分类失败!'});
            this.addDialog.show = false;
          },
          () => {
            console.log("The POST observable is now completed.");
            this.addDialog.show = false;
          });
    }

  }

  del() {
    this.current = Object.assign({}, this.selectedItem);
    this.confirmationService.confirm({
      message: '您确定要删除分类 ' + this.current.name + ' 吗?',
      accept: () => {
        this.http.delete('http://localhost:3000/categories/id/' + this.current.id, {})
          .subscribe(
            (val) => {
              this.messageService.add({ severity: 'success', summary: '', detail: '删除分类成功!' });
              this.refresh();
            },
            response => {
              this.messageService.add({severity:'error', summary:'', detail:'删除分类失败!'});
            },
            () => {
              console.log("The DELETE observable is now completed.");
            });
      }
    });
  }
}
