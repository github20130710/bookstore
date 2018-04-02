import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo.component';

/**
 * demo路由
 */
const demoRoutes: Routes = [
  { path: '', component: DemoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(demoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {}
