import { Component, OnInit } from '@angular/core';
import { products } from '../../../../products';

@Component({
  selector: 'app-list-maternity',
  templateUrl: './list-maternity.component.html',
  styleUrls: ['./list-maternity.component.css']
})
export class ListMaternityComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}
