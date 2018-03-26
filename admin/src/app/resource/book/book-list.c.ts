import { Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from "@angular/common/http";
import { Book } from '../resource-model';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'sw-book-list',
  templateUrl: './book-list.c.html',
  providers: [ConfirmationService, MessageService]
})
export class BookListComponent implements OnInit {

  books: any;
  selectedItem: any = {};
  addDialog: any = {};
  current: any = {};
  title: '书籍';
  msgs: Message[] = [];
  categoryArr: SelectItem[];
  labelArr: SelectItem[];

  constructor(private appService: AppService, private http:HttpClient, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.appService.titleEventEmitter.emit("书籍列表");
    this.addDialog = {};
  }

  ngOnInit() {
    this.selectedItem = null;
    this.http
      .get("http://localhost:3000/books")
      .subscribe(data => {this.books = data;});
  }

  refresh(){
    this.selectedItem = null;
    this.http
      .get("http://localhost:3000/books")
      .subscribe(data => {this.books = data;});
  }

  getLabels(){
    this.http
      .get("http://localhost:3000/labels")
      .subscribe(data => {this.labelArr = data;});
  }

  getCategories() {
    this.http
      .get("http://localhost:3000/categories")
      .subscribe(data => {this.categoryArr = data;});
  }

  initAddDialog(){
    this.current = {
      name: '',
      author: '',
      press: '',
      categories: [],
      labels: []
    };
    this.selectedCategories = [];
    this.selectedLabels = [];
    this.addDialog = {};
    this.getCategories();
    this.getLabels();
    this.addDialog.show = true;
  }

  add(){
    this.initAddDialog();
    this.addDialog.title = '新增';
  }

  update(){
    this.initAddDialog();
    this.current = Object.assign({}, this.selectedItem);
    this.selectedCategories = this.current.categories;
    this.selectedLabels = this.current.labels;
    this.addDialog.title = '修改';
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  addConfirm() {
    this.current.categories = [];
    for(var i in this.selectedCategories){
      this.current.categories.push({'id':this.selectedCategories[i].id, 'name':this.selectedCategories[i].name});
    }
    this.current.labels = [];
    for(var i in this.selectedLabels){
      this.current.labels.push({'id':this.selectedLabels[i].id, 'name':this.selectedLabels[i].name});
    }
    if(this.current.id!=undefined){
      this.http.put('http://localhost:3000/books/book', this.current)
        .subscribe(
          (val) => {
            this.messageService.add({severity:'success', summary:'', detail:'修改书籍成功!'});
            this.addDialog.show = false;
            this.refresh();
          },
          response => {
            this.messageService.add({severity:'error', summary:'', detail:'修改书籍失败!'});
            this.addDialog.show = false;
          },
          () => {
            console.log("The POST observable is now completed.");
          });
    } else {
      this.http.post('http://localhost:3000/books/book', this.current)
        .subscribe(
          (val) => {
            this.messageService.add({severity:'success', summary:'', detail:'新增书籍成功!'});
            this.addDialog.show = false;
            this.refresh();
          },
          response => {
            this.messageService.add({severity:'error', summary:'', detail:'新增书籍失败!'});
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
      message: '您确定要删除书籍 ' + this.current.name + ' 吗?',
      accept: () => {
        this.http.delete('http://localhost:3000/books/id/' + this.current.id, {})
          .subscribe(
            (val) => {
              this.messageService.add({ severity: 'success', summary: '', detail: '删除书籍成功!' });
              this.refresh();
            },
            response => {
              this.messageService.add({severity:'error', summary:'', detail:'删除书籍失败!'});
            },
            () => {
              console.log("The DELETE observable is now completed.");
            });
      }
    });
  }
}
