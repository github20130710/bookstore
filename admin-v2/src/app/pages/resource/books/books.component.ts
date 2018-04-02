import { Component, OnInit, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ResourceService } from '../resource-service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ ResourceService ]
})
export class BooksComponent implements OnInit{

  books: Array<any>;    //数据源
  current: any;     //当前选中的书籍

  constructor(private dialog: MatDialog, private _resourceService: ResourceService) { }

  ngOnInit() {
    this._resourceService.queryBooks()
      .subscribe(res => this.books=res);
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
  create() {
    this.openDialog({});
  }

  /** 辅助方法 **/
  openDialog(current): void {
    let dialogRef = this.dialog.open(BookCreateDialog, {
      width: '550px',
      data: { title: '新增书籍', book: current}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'book-create-dialog',
  templateUrl: 'book-create.html',
})

export class BookCreateDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title || '新增书籍';
    this.book = data.book;
  }
}
