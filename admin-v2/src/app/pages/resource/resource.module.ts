import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ResourceRoutingModule } from './resource-routing';

import { BooksComponent, BookCreateDialog } from './books/books.component';


@NgModule({
  entryComponents: [
    BooksComponent,
    BookCreateDialog
  ],
  declarations: [
    BooksComponent,
    BookCreateDialog
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ResourceRoutingModule
  ]
})
export class ResourceModule { }
