import { Injectable } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  items = [];

  addToCart(product){
    let count = 0
    if (this.items.length > 0) {
      this.items.forEach(element => {
        if (product.productId == element.productId)
        {
          product.num += 1 
        }else {
          product.num = count + 1
          this.items.push(product)
        }
      });
    }else{
      product.num = count + 1
      this.items.push(product)
    }

  }

  removeFromCart(product){
    this.items.reduce(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
