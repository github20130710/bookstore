import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'confirm-dialog',
  template: `
    <h2 mat-dialog-title>{{title}}</h2>
    <div mat-dialog-content>
      <p>{{msg}}</p>
    </div>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>取消</button>
      <button mat-button [mat-dialog-close]="true">确定</button>
    </mat-dialog-actions>`,
})

export class ConfirmDialog {
  title:string;
  msg:string;
  id:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title || '确认框';
    this.msg = data.msg || '您确定要执行该操作吗？';
    this.id = data.id;
  }
}
