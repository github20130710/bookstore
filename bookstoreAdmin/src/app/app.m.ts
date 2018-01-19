import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule }    from '@angular/http';

import { DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';

// app
import { AppComponent } from './app.c';
import { AppService }   from './app.service';
import { PageNotFoundComponent } from './error-page/page-not-found.c';

// modules
import  { AppRoutingModule } from './app-routing.m';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    DataTableModule,
    ButtonModule,
    DialogModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
