import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { GridComponent } from './grid.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
