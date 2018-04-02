import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
