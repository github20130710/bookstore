import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book.c';
import { BookListComponent } from './book-list.c';

/**
 * 主页路由
 */
const bookRoutes: Routes = [
  {
    path: '', component: BookComponent,
    children: [
      {
        path:'',
        component:BookListComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(bookRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BookRoutingModule { }
