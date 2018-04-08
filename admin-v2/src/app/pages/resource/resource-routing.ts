import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../../utils/auth-guard.service';
import { BooksComponent } from './books/books.component';

/**
 * resource路由
 */
const ResourceRoutes: Routes = [
  {
    path: '',
    // canActivateChild: [ AuthGuardService ],
    children: [
      { path: 'book', component: BooksComponent }
    ]
  }
];

export const ResourceRoutingModule = RouterModule.forChild(ResourceRoutes);
