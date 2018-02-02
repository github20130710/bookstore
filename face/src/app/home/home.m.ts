import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.m';
import { HomeComponent } from './home.c';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
