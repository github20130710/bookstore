import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo.c';
import { ButtonComponent } from './base/button.c';
import { TabComponent } from './base/tab.c';

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
