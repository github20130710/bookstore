import { NgModule } from '@angular/core';

import { ThemeModule } from '../../theme/theme.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ThemeModule,
    CarouselModule.forRoot(),
    HomeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
