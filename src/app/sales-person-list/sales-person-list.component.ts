import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson('Adam', 'Nita', 'adamnita@o2.pl', 6000),
    new SalesPerson('Goran', 'Bregowicz', 'gb@o2.pl', 1000),
    new SalesPerson('Andrzej', 'Duda', 'adudaa@o2.pl', 2000),
    new SalesPerson('Jarek', 'Kopacz', 'ajarek@o2.pl', 4000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
