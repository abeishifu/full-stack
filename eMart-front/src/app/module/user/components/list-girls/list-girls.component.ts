import { Component, OnInit } from '@angular/core';
import { products } from '../../../../products';

@Component({
  selector: 'app-list-girls',
  templateUrl: './list-girls.component.html',
  styleUrls: ['./list-girls.component.css']
})
export class ListGirlsComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}
