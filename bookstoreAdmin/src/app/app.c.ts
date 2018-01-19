import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  //templateUrl: './app.c.html',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = '我是天才';
}
