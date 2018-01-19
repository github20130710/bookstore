import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";

// app
import { MainComponent }   from './main.c';
import { AsideComponent }   from './aside.c';
import { AsideSubComponent } from './aside-sub.c';

// routing
import  { MainRoutingModule } from './main-routing.m';

/**
 * 主体模块
 */
@NgModule({
    imports:      [
        CommonModule,
        FormsModule,
        MainRoutingModule,
    ],
    declarations: [
        MainComponent,
        AsideComponent,
        AsideSubComponent
    ],
    exports:      [],
    providers:    []
})

export class MainModule {

}
