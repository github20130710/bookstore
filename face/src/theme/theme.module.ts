import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Breadcrumb } from './components/index';

import { Highlight } from './directives/index';

import { GridModule, MenuModule } from './modules/index';

const THEME_DIRECTIVES = [
  Highlight
];

const THEME_COMPONENTS = [
  Breadcrumb
];

const THEME_MODULES = [
  GridModule,
  MenuModule
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
    ReactiveFormsModule,
    ...THEME_MODULES
  ],
  exports: [
    ...THEME_DIRECTIVES,
    ...THEME_COMPONENTS,
    ...THEME_MODULES
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ThemeModule
    };
  }
}
