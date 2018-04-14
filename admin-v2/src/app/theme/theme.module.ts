import { NgModule } from '@angular/core';

import { GridModule, MenuModule } from './modules/index';

import 'style-loader!./styles/index.less';

const THEME_MODULES = [
  GridModule, MenuModule
];

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
