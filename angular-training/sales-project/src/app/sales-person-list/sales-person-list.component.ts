import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Ebubekir", "Gunerhanal","gunerebu@gmail.com", 5000),
    new SalesPerson("Mina", "Gunerhanal","gunerebu1@gmail.com", 2000),
    new SalesPerson("Medine", "Gunerhanal","gunerebu2@gmail.com", 1000),
    new SalesPerson("Ahmet", "Gunerhanal","gunerebu3@gmail.com", 3000)]

  constructor() { }

  ngOnInit(): void {
  }

}
