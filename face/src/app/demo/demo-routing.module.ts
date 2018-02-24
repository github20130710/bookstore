import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo.component';
import { BreadcrumbComponent, ButtonComponent, CarouselComponent, TabComponent, GridComponent, MenuComponent } from './index';

/**
 * 主页路由
 */
const demoRoutes: Routes = [
  {
    path: '', component: DemoComponent,
    children: [
      {
        path: 'button',
        component: ButtonComponent
      },{
        path: 'tab',
        component: TabComponent
      },{
        path: 'grid',
        component: GridComponent
      },{
        path: 'carousel',
        component: CarouselComponent
      },{
        path: 'breadcrumb',
        component: BreadcrumbComponent
      },{
        path: 'menu',
        component: MenuComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(demoRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DemoRoutingModule { }
