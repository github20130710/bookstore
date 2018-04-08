import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DemoRoutingModule } from './demo-routing';

import { DemoComponent } from './demo.component';

import { ThemeModule } from '../../theme/theme.module';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material';
import {MatIconModule} from '@angular/material';

import { ButtonComponent } from './button/button.component';
import { GridComponent } from './grid/grid.component';
import { ButtonBasicComponent } from './button/button-basic/button-basic.component';
import { ButtonIconComponent } from './button/button-icon/button-icon.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';
import { GridDetailComponent } from './grid/grid-detail/grid-detail.component';


@NgModule({
  declarations: [
    DemoComponent,
    ButtonComponent,
    GridComponent,
    ButtonBasicComponent,
    ButtonIconComponent,
    DialogComponent,
    FormComponent,
    LayoutComponent,
    GridDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    ThemeModule
  ]
})
export class DemoModule { }
