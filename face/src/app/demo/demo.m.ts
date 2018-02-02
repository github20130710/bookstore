import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";

import { DemoRoutingModule } from './demo-routing.m';
import { DemoService } from './demo.service';
import { DemoComponent } from './demo.c';

import { BaseModule } from './base/main.m';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    DemoRoutingModule,
    BaseModule
  ],
  providers: [
    DemoService
  ]
})
export class DemoModule { }
