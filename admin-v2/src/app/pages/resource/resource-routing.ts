import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';

/**
 * resource路由
 */
const ResourceRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'book',
        component: BooksComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ResourceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResourceRoutingModule {}
