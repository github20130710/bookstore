import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './demo.component';
import { ButtonComponent } from './button/button.component';
import { ButtonBasicComponent } from './button/button-basic/button-basic.component';
import { ButtonIconComponent } from './button/button-icon/button-icon.component';
import { GridComponent } from './grid/grid.component';
import { GridDetailComponent } from './grid/grid-detail/grid-detail.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';

/**
 * demo路由
 */
const demoRoutes: Routes = [
  { path: '',
    component: DemoComponent,
    children: [
      { path: 'button', component: ButtonComponent },
      { path: 'button', outlet:'basic', component: ButtonBasicComponent },
      { path: 'button', outlet:'icon', component: ButtonIconComponent },
      { path: 'grid', component: GridComponent },
      { path: 'grid-detail/:id', component: GridDetailComponent },
      { path: 'dialog', component: DialogComponent},
      { path: 'form', component: FormComponent},
      { path: 'layout', component: LayoutComponent}
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
export class DemoRoutingModule {}
