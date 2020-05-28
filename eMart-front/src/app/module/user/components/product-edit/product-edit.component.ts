import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../../Item.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products;
  product;
  constructor(
    private route: ActivatedRoute,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    this.itemService.loadList();
    this.products = JSON.parse(localStorage.getItem('products'))
    this.route.paramMap.subscribe(params => {
    this.product = this.products[+params.get('itemId')];
    });
  }

}
