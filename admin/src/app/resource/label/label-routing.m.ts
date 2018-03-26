import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabelComponent } from './label.c';
import { LabelListComponent } from './label-list.c';

/**
 * 主页路由
 */
const labelRoutes: Routes = [
  {
    path: '', component: LabelComponent,
    children: [
      {
        path:'',
        component:LabelListComponent
      }
    ]
  }
];


@NgModule({
    imports: [
        RouterModule.forChild(labelRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class LabelRoutingModule { }
