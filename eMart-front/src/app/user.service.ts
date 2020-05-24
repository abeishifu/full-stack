import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient: HttpClient) { }

  /**
   * @METHODS login
   * @param userName 
   * @param passwrod 
   * @return TRUE: success ; FALSE: failed
   */
  login(userName: string, passwrod:string):Observable<boolean> {
    console.log(passwrod);
    const url = 'http://localhost:8080/login';
    return this.httpClient.post<boolean>(url,{userName,passwrod});
  }
}
