import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../../../../products';
import { CartService } from '../../../../cart.service';

@Component({
  selector: 'app-list-maternity',
  templateUrl: './list-maternity.component.html',
  styleUrls: ['./list-maternity.component.css']
})
export class ListMaternityComponent implements OnInit {
  products = products
  product
  role = sessionStorage.getItem("role")
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
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }

}
