import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { FormsModule }   from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoService } from './demo.service';
import { DemoComponent } from './demo.component';

import { ThemeModule } from '../../theme/theme.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BreadcrumbComponent, ButtonComponent, CarouselComponent, TabComponent, GridComponent, MenuComponent } from './index';

@NgModule({
  declarations: [
    DemoComponent,
    BreadcrumbComponent,
    ButtonComponent,
    TabComponent,
    CarouselComponent,
    GridComponent,
    MenuComponent
  ],
  imports: [
    DemoRoutingModule,
    ThemeModule,
    FormsModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    DemoService
  ]
})
export class DemoModule { }
