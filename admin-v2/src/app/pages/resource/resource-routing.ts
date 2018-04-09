import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../utils/auth-guard.service';
import { BooksComponent } from './books/books.component';

/**
 * resource路由
 */
const resourceRoutes: Routes = [
  {
    path: '',
    //canActivateChild: [ AuthGuard ],
    children: [
      { path: 'book', component: BooksComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(resourceRoutes) ],
  exports: [ RouterModule ]
})

export class ResourceRoutingModule {

}
