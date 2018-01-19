import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { DataTableModule, ButtonModule, DialogModule, InputTextModule } from 'primeng/primeng';

// routing
import { LabelRoutingModule  } from './label-routing.m';

// app
import { ResourceService } from '../resource.service';
import { LabelComponent } from './label.c';
import { LabelListComponent } from './label-list.c';

/**
 * 主体模块
 */
@NgModule({
    imports:      [
        CommonModule,
        FormsModule,
        LabelRoutingModule,
        DataTableModule,
        ButtonModule,
        DialogModule,
        InputTextModule
    ],
    declarations: [
        LabelComponent,
        LabelListComponent
    ],
    exports:      [],
    providers:    [
      ResourceService
    ]
})

export class LabelModule {

}
