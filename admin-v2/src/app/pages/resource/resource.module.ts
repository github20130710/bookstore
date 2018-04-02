import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ThemeModule } from '../../theme/theme.module';

import { ResourceRoutingModule } from './resource-routing';
import { ResourceComponent } from './resource.component';
import { BooksComponent, BookCreateDialog } from './books/books.component';
import { ConfirmDialog } from '../../utils/confirm-dialog';


@NgModule({
  entryComponents: [
    BookCreateDialog,
    ConfirmDialog
  ],
  declarations: [
    ResourceComponent,
    BooksComponent,
    BookCreateDialog,
    ConfirmDialog
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ThemeModule,
    ResourceRoutingModule
  ]
})
export class ResourceModule { }
