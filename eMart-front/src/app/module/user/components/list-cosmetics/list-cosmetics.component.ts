import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../../cart.service';
import { ItemService } from '../../../../Item.service';

@Component({
  selector: 'app-list-cosmetics',
  templateUrl: './list-cosmetics.component.html',
  styleUrls: ['./list-cosmetics.component.css']
})
export class ListCosmeticsComponent implements OnInit {
  products;
  product;
  role = sessionStorage.getItem("role")
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    var cosmetics
    this.itemService.loadList();
    cosmetics = JSON.parse(localStorage.getItem('products'))
    this.products = cosmetics.filter(product => product.catalog == 'cosmetics')
    this.route.paramMap.subscribe(params => {
      this.product = cosmetics[+params.get('itemId')];
    })  
    console.log("ngOnInit")
  }

  addToCart(product) {
    console.log(product)
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }
}
