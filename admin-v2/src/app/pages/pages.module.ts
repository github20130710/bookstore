import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoute } from './pages-routing';

import { MatDialogModule, MatFormFieldModule } from '@angular/material';
import { ThemeModule } from '../theme/theme.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoute,
    MatDialogModule,
    MatFormFieldModule,
    ThemeModule
  ],
  providers: []
})
export class PagesModule { }
