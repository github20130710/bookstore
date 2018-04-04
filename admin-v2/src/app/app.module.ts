import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { HttpInterceptorService } from './utils/http-service';
import { ThemeModule } from './theme/theme.module';
import { PagesModule } from './pages/pages.module';
import { PageNotFoundComponent } from './error-page/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    ThemeModule,
    PagesModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
