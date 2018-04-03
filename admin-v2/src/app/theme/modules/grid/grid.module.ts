import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntl} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { GridComponent, MatPaginatorIntlCro } from './grid.component';


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  exports: [
    GridComponent
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}]
})
export class GridModule { }
