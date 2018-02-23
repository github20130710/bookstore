import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'sw-ui-grid',
  templateUrl: './grid.html'
})
export class GridComponent {

  private _columns:Array<any> = []; // 表格列配置
  private _config:any = {};         // 表格配置,包括分页
  private _rows:Array<any> = [];    // 表格当前页中的全部数据
  private datas:Array<any> = [];    // 表格中全部数据
  private currentPage:number = 1;   // 表格当前页

  @Input()
  public set config(conf:any) {
    if (!conf.className) {
      conf.className = 'table-striped table-bordered';
    }
    if (conf.className instanceof Array) {
      conf.className = conf.className.join(' ');
    }
    this._config = conf;
    this._config.itemsPerPage = conf.itemsPerPage || 20;
  }

  public get config():any {
    return this._config;
  }

  @Input()
  public set columns(values:Array<any>) {
    values.forEach((value:any) => {
      if (value.className && value.className instanceof Array) {
        value.className = value.className.join(' ');
      }
      let column = this._columns.find((col:any) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
    this._columns = values;
  }

  public get columns():Array<any> {
    return this._columns;
  }

  @Input()
  public set rows(rows:Array<any>){
    this.datas = rows;
    this._config.totalItems = this._config.paging ? this._config.totalItems : rows.length;
    this._rows = this._config.paging ? this.changePage(this._config, rows) : rows;
  }

  public get rows(): Array<any> {
    return this._rows;
  }

  // Outputs (Events)
  @Output() public tableChanged:EventEmitter<any> = new EventEmitter();
  @Output() public cellClicked:EventEmitter<any> = new EventEmitter();
  @Output() public rowClicked:EventEmitter<any> = new EventEmitter();

  public constructor(private sanitizer:DomSanitizer) {}

  public sanitize(html:string):SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public get configColumns():any {
    let sortColumns:Array<any> = [];

    this.columns.forEach((column:any) => {
      sortColumns.push(column);
    });

    return {columns: sortColumns};
  }

  public onChangeTable(config:any):any {
    this._rows = config.paging ? this.changePage(config, this.datas) : this.datas;
    //this.tableChanged.emit(config);
  }

  public getData(row:any, propertyName:string):string {
    return propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
  }

  public cellClick(row:any, column:any):void {
    this.cellClicked.emit({row, column});
  }

  public rowClick(row:any):void {
    this.rowClicked.emit({row});
  }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    this._config.currentPage = event.page;
    this._config.itemsPerPage = event.itemsPerPage;
    this.onChangeTable(this._config);
  }

  /**
   * paging
   * @param page
   * @param data
   * @returns {any[]|T[]}
     */
  public changePage(page:any, data:Array<any> = this.datas):Array<any> {
    let start = (page.currentPage - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

}
