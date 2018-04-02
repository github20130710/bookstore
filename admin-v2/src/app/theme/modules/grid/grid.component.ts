import {Component, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'sw-ui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  // 表格配置
  private _columns:Array<any> = [];
  private _options:any = {
    paging: true,
    currentPage: 1,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20],
    total: 0
  };

  @Input()
  private dataSource:Array<any> = [];
  private columnsToDisplay:Array<any> = [];   //待展示的列
  private rows:any;       //每页显示的数据

  @Input()
  public set columns(values:Array<any>) {
    values.forEach((value:any) => {
      let column = this._columns.find((col:any) => col.name === value.name);
      if (column) Object.assign(column, value);
      if (!column) this._columns.push(value);
    });
    this._columns = values;
  }

  public get columns():Array<any> {
    return this._columns;
  }

  @Input()
  public set options(options:any) {
    this._options = options;
    if (!options.className) {
      this._options.className = 'table-striped table-bordered';
    }
    this._options.pageSize = options.pageSize || 20;
  }

  public get options():any {
    return this._options;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    this.rows = this.dataSource || {};
    this.columnsToDisplay = this.columns.map(x => x.name)
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.rows.paginator = this.paginator;
  }
}
