import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule} from "@angular/router";
import { InputSwitchModule } from 'primeng/primeng';
import { DataTableModule, ButtonModule, DialogModule, ConfirmDialogModule, GrowlModule, InputTextModule } from 'primeng/primeng';

// routing
import { LabelRoutingModule  } from './label-routing.m';

// app
//import { ResourceService } from '../resource.service';
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
        InputSwitchModule,
        DataTableModule,
        ButtonModule,
        DialogModule,
        ConfirmDialogModule,
        GrowlModule,
        InputTextModule
    ],
    declarations: [
        LabelComponent,
        LabelListComponent
    ],
    exports:      [],
    providers:    [
    ]
})

export class LabelModule {

}
