import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Breadcrumb } from './components/index';

import { Highlight } from './directives/index';

const THEME_DIRECTIVES = [
  Highlight
];

const THEME_COMPONENTS = [
  Breadcrumb
];

@NgModule({
  declarations: [
    ...THEME_DIRECTIVES,
    ...THEME_COMPONENTS
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...THEME_DIRECTIVES,
    ...THEME_COMPONENTS
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ThemeModule
    };
  }
}
