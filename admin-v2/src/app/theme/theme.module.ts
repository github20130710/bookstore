import { NgModule } from '@angular/core';

import { GridModule, MenuModule } from './modules/index';

const THEME_MODULES = [
  GridModule, MenuModule
]

@NgModule({
  declarations: [

  ],
  imports: [
    ...THEME_MODULES
  ],
  exports: [
    ...THEME_MODULES
  ]
})
export class ThemeModule { }
