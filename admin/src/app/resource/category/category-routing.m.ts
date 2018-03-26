import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category.c';
import { CategoryListComponent } from './category-list.c';

/**
 * 主页路由
 */
const categoryRoutes: Routes = [
  {
    path: '', component: CategoryComponent,
    children: [
      {
        path:'',
        component:CategoryListComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CategoryRoutingModule { }
