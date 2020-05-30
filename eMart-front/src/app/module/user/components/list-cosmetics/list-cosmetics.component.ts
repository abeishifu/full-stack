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
  cosmetics;
  cosmetic;
  role = sessionStorage.getItem("role")
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    this.itemService.loadList();
    this.products = JSON.parse(localStorage.getItem('products'));
    this.cosmetics = this.products.filter(product => product.catalog == 'cosmetics');
    this.route.paramMap.subscribe(params => {
        this.cosmetic = this.cosmetics[+params.get('productId')];
      })
  }

  addToCart(product) {
    console.log(product)
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }
}
