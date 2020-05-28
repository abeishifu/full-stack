import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../../cart.service';
import { ItemService } from '../../../../Item.service';

@Component({
  selector: 'app-list-women',
  templateUrl: './list-women.component.html',
  styleUrls: ['./list-women.component.css']
})
export class ListWomenComponent implements OnInit {
  products;
  product;
  role = sessionStorage.getItem("role")
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    var women
    this.itemService.loadList();
    women = JSON.parse(localStorage.getItem('products'))
    this.products = women.filter(product => product.catalog == 'women')
    this.route.paramMap.subscribe(params => {
      this.product = women[+params.get('itemId')];
    })  
    console.log("ngOnInit")
  }

  addToCart(product) {
    console.log(product)
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }


}
