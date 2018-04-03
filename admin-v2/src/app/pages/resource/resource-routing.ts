import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceComponent } from './resource.component';
import { BooksComponent } from './books/books.component';

/**
 * resource路由
 */
const ResourceRoutes: Routes = [
  {
    path: '',
    component: ResourceComponent,
    children: [
      { path: 'book', component: BooksComponent }
    ]
  }
];

export const ResourceRoutingModule = RouterModule.forChild(ResourceRoutes);