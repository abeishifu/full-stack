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
    localStorage.clear;
  }
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

    /**
   * @METHODS updateitem
   * @param itemname
   * @param itemprice 
   * @param description
   * @return TRUE: success ; FALSE: failed
   */
  updateitem(itemId: number,itemname: string, itemprice: string, description: string):Observable<boolean> {
    const url = 'http://localhost:8080/updateitem';
    console.log(itemname)
    return this.httpClient.post<boolean>(url,{itemId,itemname,itemprice,description});
  }

}
