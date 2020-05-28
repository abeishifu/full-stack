import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../../cart.service';
import { ItemService } from '../../../../Item.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products;
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    this.itemService.loadList();
    this.products = JSON.parse(localStorage.getItem('products'))
    this.route.paramMap.subscribe(params => {
    this.product = this.products[+params.get('itemId')];
    });
  }

  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.product);
  }

}
