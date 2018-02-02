import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { DemoService } from '../demo.service';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonComponent } from './button.c';
import { TabComponent } from './tab.c';

@NgModule({
  declarations: [
    ButtonComponent,
    TabComponent
  ],
  imports: [
    FormsModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    DemoService
  ]
})

export class BaseModule { }
