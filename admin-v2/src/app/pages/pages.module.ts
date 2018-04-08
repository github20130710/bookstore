import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing';

import { MatDialogModule, MatFormFieldModule } from '@angular/material';
import { ThemeModule } from '../theme/theme.module';
import { LoginModule } from './login/login.module';
import { DemoModule } from './demo/demo.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoutingModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    ThemeModule,
    LoginModule,
    DemoModule
  ],
  providers: [ ]
})

export class PagesModule { }
