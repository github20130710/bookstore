import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../utils/auth-guard.service';
import { AuthService } from '../../utils/auth.service';
import { BooksComponent } from './books/books.component';

/**
 * resource路由
 */
const resourceRoutes: Routes = [
  {
    path: '',
    canActivateChild: [ AuthGuard ],
    children: [
      { path: 'book', component: BooksComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(resourceRoutes) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
    AuthService
  ]
})

export class ResourceRoutingModule {

}
