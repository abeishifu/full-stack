import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../../../../products';
import { CartService } from '../../../../cart.service';

@Component({
  selector: 'app-list-cosmetics',
  templateUrl: './list-cosmetics.component.html',
  styleUrls: ['./list-cosmetics.component.css']
})
export class ListCosmeticsComponent implements OnInit {
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
    console.log(sessionStorage.getItem("role"))
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }
}
