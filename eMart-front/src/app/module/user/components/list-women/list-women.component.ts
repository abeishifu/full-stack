import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../../../../products';
import { CartService } from '../../../../cart.service';


@Component({
  selector: 'app-list-women',
  templateUrl: './list-women.component.html',
  styleUrls: ['./list-women.component.css']
})
export class ListWomenComponent implements OnInit {
  products = products
  product
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    console.log(product)
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }

}
