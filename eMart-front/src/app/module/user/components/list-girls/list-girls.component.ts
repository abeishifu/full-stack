import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../../cart.service';
import { ItemService } from '../../../../Item.service';

@Component({
  selector: 'app-list-girls',
  templateUrl: './list-girls.component.html',
  styleUrls: ['./list-girls.component.css']
})
export class ListGirlsComponent implements OnInit {
  products;
  product;
  role = sessionStorage.getItem("role")
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    var girls
    this.itemService.loadList();
    girls = JSON.parse(localStorage.getItem('products'))
    this.products = girls.filter(product => product.catalog == 'girls')
    this.route.paramMap.subscribe(params => {
      this.product = girls[+params.get('itemId')];
    })  
    console.log("ngOnInit")
  }

  addToCart(product) {
    console.log(product)
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }
}
