import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private columns = [
    {'name':'id', 'display':'ID'},
    {'name':'name', 'display':'名称'},
    {'name':'weight', 'display':'权重', 'cellTemplate':'{{value}} %'},
    {'name':'symbol', 'display':'标识'}
  ]

  private ELEMENT_DATA: Array<any> = [
    {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {id: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {id: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {id: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {id: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {id: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {id: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {id: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {id: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {id: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {id: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];
}
