import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { InputSwitchModule } from 'primeng/primeng';
import { DataTableModule, ButtonModule, DialogModule, ConfirmDialogModule, GrowlModule, InputTextModule } from 'primeng/primeng';

// routing
import { CategoryRoutingModule  } from './category-routing.m';

// app
import { CategoryComponent } from './category.c';
import { CategoryListComponent } from './category-list.c';

/**
 * 主体模块
 */
@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    InputSwitchModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule,
    InputTextModule
  ],
  declarations: [
    CategoryComponent,
    CategoryListComponent
  ],
  exports:      [],
  providers:    [
  ]
})

export class CategoryModule {

}
