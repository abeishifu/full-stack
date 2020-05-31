import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../../Item.service';
import { Item } from 'src/app/entity/item';
import {HttpClient, HttpParams} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products; 
  product;
  women;
  maternity;
  girls;
  cosmetics;
  updateitem: FormGroup;
  itemId;
  constructor(
    private route: ActivatedRoute,
    private itemService:ItemService,
    private httpClient: HttpClient,
    private router:Router,
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
        console.log(this.product);
      }else if( catalog == 'maternity' ){
        this.product = this.maternity[+params.get('productId')];
      }else if (catalog == 'girls' ){
        this.product = this.girls[+params.get('productId')];
      }else if (catalog == 'cosmetics' ){
        this.product = this.cosmetics[+params.get('productId')];
      }
    });
    this.updateitem = new FormGroup({
      itemname: new FormControl(this.product.itemname),
      itemprice: new FormControl(this.product.itemprice),
      description: new FormControl(this.product.description),
    });

    this.itemId = this.product.itemId;

  //   var params =params: HttpParams | {
  //   param: Item.itemid
  // };
  }
  // onDelete(Item: Item): Observable<boolean>{
  //   console.log(Item.itemId);
  //   return this.httpClient.delete<boolean>('http://localhost:8080/delete/{Item.itemId}')

   
  //     // return this.httpClient.post<boolean>(url,{username,password,mobilenum,email,userrole});

  //     // alert(this.httpClient.delete('http://localhost:8080/delete/${Item.itemId}'))
  //     // alert('Deleted!');
  // //   }else{
  // //     alert('Failed to delete!');
  // //   }
  // //   console.log(Item.itemId);
  // }


  onDelete():void{
    const url = `http://localhost:8080/delete/${this.itemId}`;
    console.log(url)
     this.httpClient.delete(url).subscribe( data => {
      console.log(data)
    },
    error =>{
      console.log(error)
    })
  }

  onSubmit() {
    const itemname = this.updateitem.get('itemname').value;
    const itemprice = this.updateitem.get('itemprice').value;
    const description = this.updateitem.get('description').value;
    this.itemService.updateitem(this.itemId,itemname,itemprice,description).subscribe(result =>{
      console.log(this.itemId);
      if (result) {
        console.log(result);
        this.router.navigate(['./../']);
        // this.userService.setIsLogin(true);
      } else {
        alert('wrong user name or password');
      }
    })
    
  }


}
