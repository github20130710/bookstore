import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { InputSwitchModule } from 'primeng/primeng';
import { DataTableModule, ButtonModule, DialogModule, ConfirmDialogModule, GrowlModule, InputTextModule, MultiSelectModule } from 'primeng/primeng';

// routing
import { BookRoutingModule  } from './book-routing.m';

// app
import { BookComponent } from './book.c';
import { BookListComponent } from './book-list.c';

/**
 * 主体模块
 */
@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    BookRoutingModule,
    InputSwitchModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule,
    InputTextModule,
    MultiSelectModule
  ],
  declarations: [
    BookComponent,
    BookListComponent
  ],
  exports:      [],
  providers:    [
  ]
})

export class BookModule {

}
