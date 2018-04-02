import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }   from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { ThemeModule } from './theme/theme.module';
import { PagesModule } from './pages/pages.module';
import { PageNotFoundComponent } from './error-page/page-not-found.component';
import { HttpInterceptorService } from './utils/http-service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    ThemeModule,
    PagesModule
  ],
  providers: [ HttpInterceptorService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
