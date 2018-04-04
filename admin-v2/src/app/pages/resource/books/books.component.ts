import { Component, OnInit, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResourceService } from '../resource-service';
import { ConfirmDialog } from '../../../utils/confirm-dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ ResourceService ]
})
export class BooksComponent implements OnInit{

  books: Array<any> = [
    //{"price":4,"discount":3,"stock":123,"sold":0,"categories":[],"tags":[],"cDate":"2018-04-04T09:18:14.646Z","uDate":"2018-04-04T09:18:14.646Z","_id":"5ac49856774c881344544564","name":"jsjd","author":"sdfs","press":"sdfs"},{"price":49,"discount":49,"stock":1000,"sold":0,"categories":[],"tags":[],"cDate":"2018-04-03T02:56:17.538Z","uDate":"2018-04-03T02:56:17.538Z","_id":"5ac2ed51f826670bd340daa2","name":"中国云力量","author":"吴玉征","press":"电子工业出版社"},{"price":14.98,"discount":9.99,"stock":999,"sold":23,"categories":[],"tags":[""],"cDate":"2018-04-04T09:19:39.509Z","uDate":"2018-03-28T06:36:54.579Z","_id":"5aba0fc6f60f4b07a278df6e","name":"demo323","author":"Jack","press":"邮电出版社333","provider":"Sophia","__v":0},{"price":14.98,"discount":9.99,"stock":999,"sold":23,"categories":[],"tags":[""],"cDate":"2018-04-04T09:19:39.509Z","uDate":"2018-03-28T06:36:54.579Z","_id":"5aba10c506754507ae729dee","name":"demo323","author":"Jack","press":"邮电出版社333","provider":"Sophia","__v":0},{"price":14.98,"discount":9.99,"stock":999,"sold":23,"categories":[],"tags":[""],"cDate":"2018-04-04T09:19:39.509Z","uDate":"2018-03-28T06:36:54.579Z","_id":"5aba1110db7f6d07b68fd501","name":"demo323","author":"Jack","press":"邮电出版社333","provider":"Sophia","__v":0},{"price":0,"discount":0,"stock":0,"sold":0,"categories":[],"tags":[],"cDate":"2018-04-04T09:19:39.509Z","uDate":"2018-03-28T06:36:54.579Z","_id":"5abb374d89edd6055316758a","author":"Jack","__v":0,"name":"demo323","press":"邮电出版社333"},{"price":0,"discount":0,"stock":0,"sold":0,"categories":[],"tags":[],"cDate":"2018-04-04T09:19:39.510Z","uDate":"2018-03-28T06:36:54.579Z","_id":"5abb378e3b3032055a243237","author":"Jack","__v":0,"name":"demo323","press":"邮电出版社333"},{"price":0,"discount":0,"stock":0,"sold":0,"categories":[],"tags":[],"cDate":"2018-04-04T09:19:39.510Z","uDate":"2018-03-28T06:36:54.579Z","_id":"5abb37dbeedee4055eaa486b","author":"Jack","__v":0,"name":"demo323","press":"邮电出版社333"},{"price":0,"discount":0,"stock":0,"sold":0,"categories":[],"tags":[],"cDate":"2018-03-28T02:59:55.434Z","uDate":"2018-03-28T02:59:55.434Z","_id":"5abb052b561be404aa000480","name":"中华上下五千年","__v":0}
  ];    //数据源
  current: any;     //当前选中的书籍

  //public _Form: FormGroup;

  constructor(private dialog: MatDialog,
    private _resourceService: ResourceService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    //this._Form = this.fb.group({
    //  name: ['', [Validators.required, Validators.maxLength(10)]],
    //  author: ['', [Validators.required, Validators.maxLength(10)]],
    //  press: ['', [Validators.required, Validators.maxLength(30)]],
    //  price: [0.00, [Validators.required, Validators.maxLength(10)]],
    //  discount: [0.00, [Validators.required, Validators.maxLength(10)]],
    //  stock: [0, [Validators.required, Validators.maxLength(10)]]
    //});
    this._resourceService.queryBooks().subscribe(res => this.books=res);
  }

  private columns = [
    {'name':'name', 'display':'名称'},
    {'name':'author', 'display':'作者'},
    {'name':'press', 'display':'出版社'},
    {'name':'price', 'display':'价格（¥）'},
    {'name':'stock', 'display':'库存'},
    {'name':'sold', 'display':'已售'}
  ];

  onSelected(data: any) {
    this.current = data;
  }

  /** 操作方法 **/
  refresh(){
    this.current = {};
    this._resourceService.queryBooks().subscribe(res => this.books=res);
  }

  create() {
    this.openDialog({});
  }

  edit() {
    this.openDialog(this.current);
  }

  remove() {
    this.openConfirmDialog(this.current);
  }

  /** 辅助方法 **/
  openDialog(current): void {
    let data = { title: '新增书籍', book: current};
    if(current && current.id)   data.title = '修改书籍';
    let dialogRef = this.dialog.open(BookCreateDialog, {
      width: '550px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      let book = result;
      if(current && current.id) {
        this._resourceService.editBook({id:current.id}, book).subscribe(res => this.refresh());
      } else {
        this._resourceService.createBook(book).subscribe(res => this.refresh());
      }
    });
  }

  openConfirmDialog(current): void {
    let msg = '您确定要删除' + current.name + '吗 ？';
    let dialogRef = this.dialog.open(ConfirmDialog, {
      data: { title: '删除书籍', msg: msg}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this._resourceService.deleteBookById(current._id).subscribe(res => this.refresh());
    });
  }

}


@Component({
  selector: 'book-create-dialog',
  templateUrl: 'book-create.html',
})

export class BookCreateDialog {
  title:string;
  book:any;

  constructor(public dialogRef: MatDialogRef<BookCreateDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title || '新增书籍';
    this.book = data.book;
  }

  onClick(): void {
    this.dialogRef.close(this.book);
  }
}
