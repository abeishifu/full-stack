import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from './entity/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
items;

constructor(private httpClient: HttpClient) { }

loadList(): void{
  if(localStorage.getItem('products')){
    console.log("local not null")
    console.log(JSON.parse(localStorage.getItem('products')));
  }else{
  console.log("loadlist")
    const url = 'http://localhost:8080/get';
     this.httpClient.get(url).subscribe(items => {
      this.items = items; 
      localStorage.setItem('products',JSON.stringify(items))
    },
      () => {
        console.log('aaa');
      });
    }
}


}
