import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ThemeModule } from '../../theme/theme.module';

import { ResourceRoutingModule } from './resource-routing';
import { BooksComponent, BookCreateDialog } from './books/books.component';
import { ConfirmDialog } from '../../utils/confirm-dialog';


@NgModule({
  entryComponents: [
    BookCreateDialog,
    ConfirmDialog
  ],
  declarations: [
    BooksComponent,
    BookCreateDialog,
    ConfirmDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ThemeModule,
    ResourceRoutingModule
  ]
})
export class ResourceModule { }
