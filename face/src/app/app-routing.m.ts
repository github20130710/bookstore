import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-page/page-not-found.c';


/**
 * app路由
 */
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'
  },{
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },{
    path: 'demo',
    loadChildren: 'app/demo/demo.module#DemoModule'
  },{
    path: 'books',
    loadChildren: 'app/books/books.module#BooksModule'
  },{
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
