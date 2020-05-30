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
  woman;
  women;
  role = sessionStorage.getItem("role")
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    this.itemService.loadList();
      this.products = JSON.parse(localStorage.getItem('products'));
      this.women = this.products.filter(product => product.catalog == 'women');
      this.route.paramMap.subscribe(params => {
        this.woman = this.women[+params.get('productId')];
      })  
    

  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!')
    this.cartService.addToCart(product)
  }


}
