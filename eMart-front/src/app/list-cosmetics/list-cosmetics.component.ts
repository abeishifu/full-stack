import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-list-cosmetics',
  templateUrl: './list-cosmetics.component.html',
  styleUrls: ['./list-cosmetics.component.css']
})
export class ListCosmeticsComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}
