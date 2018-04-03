import { Component, OnInit, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResourceService } from '../resource-service';
import { ConfirmDialog } from '../../../utils/confirm-dialog';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ ResourceService ]
})
export class BooksComponent implements OnInit{

  books: Array<any>;    //数据源
  current: any;     //当前选中的书籍

  constructor(private dialog: MatDialog, private _resourceService: ResourceService) {
  }

  ngOnInit() {
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
        this._resourceService.editBook({id:current.id}, book).subscribe(res => console.log(res));
      } else {
        this._resourceService.createBook(book).subscribe(res => console.log(res));
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
      this._resourceService.deleteBook({id:current.id}).subscribe(res => console.log(res));
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
