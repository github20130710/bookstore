import { Component, OnInit } from '@angular/core';
import { MENUS } from '../app-menu';


@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private menuItems = MENUS;

}
