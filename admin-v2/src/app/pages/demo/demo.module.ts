import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DemoRoutingModule } from './demo-routing';

import { DemoComponent } from './demo.component';

import { ThemeModule } from '../../theme/theme.module';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ThemeModule
  ]
})
export class DemoModule { }
