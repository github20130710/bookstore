import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { ThemeModule } from '../../theme/theme.module';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    BooksRoutingModule
  ],
  providers: [
  ]
})
export class BooksModule { }
