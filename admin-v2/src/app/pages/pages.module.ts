import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material';

import { PagesComponent } from './pages.component';
import { PagesRoute } from './pages-routing';

import { MatDialogModule, MatFormFieldModule } from '@angular/material';
import { ThemeModule } from '../theme/theme.module';
import { LoginModule } from './login/login.module';
import { DemoModule } from './demo/demo.module';

import { AuthGuardService } from '../utils/auth-guard.service';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoute,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    ThemeModule,
    LoginModule,
    DemoModule
  ],
  providers: [ AuthGuardService ]
})
export class PagesModule { }
