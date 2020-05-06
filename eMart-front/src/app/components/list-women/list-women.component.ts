import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-list-women',
  templateUrl: './list-women.component.html',
  styleUrls: ['./list-women.component.css']
})
export class ListWomenComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}
