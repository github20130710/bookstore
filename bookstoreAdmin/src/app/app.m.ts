import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { DataTableModule, ButtonModule, DialogModule, ConfirmDialogModule, GrowlModule, ToolbarModule, InputTextModule } from 'primeng/primeng';

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
    HttpClientModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule,
    ToolbarModule,
    InputTextModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
