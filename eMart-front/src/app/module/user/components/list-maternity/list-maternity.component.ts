import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../../cart.service';
import { ItemService } from '../../../../Item.service';

@Component({
  selector: 'app-list-maternity',
  templateUrl: './list-maternity.component.html',
  styleUrls: ['./list-maternity.component.css']
})
export class ListMaternityComponent implements OnInit {
  products;
  product;
  role = sessionStorage.getItem("role")
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    var maternity
    this.itemService.loadList();
    maternity = JSON.parse(localStorage.getItem('products'))
    this.products = maternity.filter(product => product.catalog == 'maternity')
    this.route.paramMap.subscribe(params => {
      this.product = maternity[+params.get('itemId')];
    })  
    console.log("ngOnInit")
  }

  addToCart(product) {
    console.log(product)
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }

}
