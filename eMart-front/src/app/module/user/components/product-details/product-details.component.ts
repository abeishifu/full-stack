import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../../cart.service';
import { ItemService } from '../../../../Item.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products; 
  product;
  women;
  maternity;
  girls;
  cosmetics;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private itemService:ItemService
  ) { }

  ngOnInit() {
    this.itemService.loadList();
    this.products = JSON.parse(localStorage.getItem('products'));
    this.women = this.products.filter(product => product.catalog == 'women');
    this.maternity = this.products.filter(product => product.catalog == 'maternity');
    this.girls = this.products.filter(product => product.catalog == 'girls');
    this.cosmetics = this.products.filter(product => product.catalog == 'cosmetics');
    this.route.paramMap.subscribe(params => {
      var catalog = params.get('catalog')
      console.log(catalog);
      if( catalog == 'women') {
        this.product = this.women[+params.get('productId')];
      }else if( catalog == 'maternity' ){
        this.product = this.maternity[+params.get('productId')];
      }else if (catalog == 'girls' ){
        this.product = this.girls[+params.get('productId')];
      }else if (catalog == 'cosmetics' ){
        this.product = this.cosmetics[+params.get('productId')];
      }
    });
  }

  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.product);
  }

}
