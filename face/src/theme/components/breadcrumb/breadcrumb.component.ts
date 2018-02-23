import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'sw-ui-breadcrumb',
  styleUrls: ['./breadcrumb.scss'],
  template: `
  <div class="ui-breadcrumb">
    <span *ngFor="let crumb of _breadcrumbs;">
      <a routerLink={{crumb.route}}>{{crumb.name}}</a>&nbsp;>&nbsp;
    </span>
  </div>
  `
})
export class Breadcrumb implements OnInit{

  private _breadcrumbs:Array<any>;

  @Input('crumbs')
  set breadcrumbs(values: Array<any>) {
    this._breadcrumbs = values || [];
  }

  get breadcrumbs(): Array<any>{
    return this._breadcrumbs;
  }

  constructor(){
  }

  ngOnInit(){}

}
