import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  userid = sessionStorage.getItem("userid")
  constructor(
    private cartService: CartService,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

  }

  onBuy():Observable<boolean>{
    const url = 'http://localhost:8080/buy';
    console.log(url);
    console.log(this.items);
    return this.httpClient.post<boolean>(url,{items:this.items,userid:this.userid})
  }

}
