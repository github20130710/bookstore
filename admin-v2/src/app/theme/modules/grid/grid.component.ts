import { Component, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatPaginatorIntl, PageEvent } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'sw-ui-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input()
  dataSource:Array<any> = [];

  @Output()
  selectedRows:Array<any> = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // 表格配置:默认值
  private _columns:Array<any> = [];
  private _options:any = {
    paging: true,
    currentPage: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    length: 0
  };
  selection = new SelectionModel<any>(true, []);
  columnsToDisplay:Array<any> = [];   //待展示的列
  rows:any;       //每页显示的数据

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
    this._options.pageSize = options.pageSize || 10;
  }

  public get options():any {
    return this._options;
  }

  ngOnInit(){
    this.rows = new MatTableDataSource(this.dataSource) || {};
    this.columnsToDisplay = this.columns.map(x => x.name);
    this.columnsToDisplay.unshift('select');
  }

  /**
   * Set the paginator and sort after the view init .
   */
  ngAfterViewInit() {
    this.rows.paginator = this.paginator;
    this.rows.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.rows.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() :
      this.rows.data.forEach(row => this.selection.select(row));
  }

  selectRow(row){
    this.selection.toggle(row);
    var isSelect = this.selection.isSelected(row);
    if(isSelect) this.selectedRows.push(row);
    else{
      let index = this.selectedRows.findIndex((value, index, arr) => {
        return value.id=row.id
      });
      this.selectedRows.splice(index);
    }
    console.log(this.selectedRows);
  }

  /** Filter all rows. */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.rows.filter = filterValue;
  }

}

/**
 * 自定义分页显示
 */
export class MatPaginatorIntlCro extends MatPaginatorIntl {
  itemsPerPageLabel = '每页记录数';
  nextPageLabel = '下一页';
  previousPageLabel = '上一页';
  getRangeLabel = function (page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      return '0 od ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;
    return '第' + (startIndex + 1) + ' - ' + endIndex + ' 条，总共：' + length + '条';
  };
}
