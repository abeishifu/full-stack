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
  maternity;
  mater;
  role = sessionStorage.getItem("role")
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    this.itemService.loadList();
    this.products = JSON.parse(localStorage.getItem('products'));
    this.maternity = this.products.filter(product => product.catalog == 'maternity');
    this.route.paramMap.subscribe(params => {
        this.mater = this.maternity[+params.get('productId')];
      }) 
  }

  addToCart(product) {
    console.log(product)
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }

}
