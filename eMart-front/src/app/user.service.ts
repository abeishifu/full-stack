import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {user} from './entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /** 数据源 */
  // private isLogin: BehaviorSubject<boolean>;

  /** 数据源对应的订阅服务 */
  // public isLogin$: Observable<boolean>;
  // private isLoginCacheKey = 'isLogin';
  constructor(private httpClient: HttpClient) {
  //   const isLogin: string = window.sessionStorage.getItem(this.isLoginCacheKey);
  //   this.isLogin = new BehaviorSubject(this.convertStringToBoolean(isLogin));
  //   this.isLogin$ = this.isLogin.asObservable();
  }
  

  /**
   * @METHODS login
   * @param username
   * @param password 
   * @return Role: buyer seller
   */
  login(username: string, password:string):Observable<user> {
    const url = 'http://localhost:8080/login';
    return this.httpClient.post<user>(url,{username,password});
  }

    /**
   * 设置登录状态
   * @param isLogin 登录状态
   */
  // setIsLogin(isLogin: boolean) {
  //   window.sessionStorage.setItem(this.isLoginCacheKey, this.convertBooleanToString(isLogin));
  //   this.isLogin.next(isLogin);
  // }
  /**
   * 字符串转换为boolean
   * @param value 字符串
   * @return 1 true; 其它 false
   */
  convertStringToBoolean(value: string) {
    return value === '1';
  }
    /**
   * boolean转string
   * @param value boolean
   * @return '1' true; '0' false;
   */
  convertBooleanToString(value: boolean) {
    return value ? '1' : '0';
  }


    /**
   * @METHODS register
   * @param username
   * @param password 
   * @return TRUE: success ; FALSE: failed
   */
  register(username: string, password:string, mobilenum:string, email:string, userrole:string):Observable<boolean> {
    const url = 'http://localhost:8080/register';
    return this.httpClient.post<boolean>(url,{username,password,mobilenum,email,userrole});
  }

    /**
   * @METHODS newitem
   * @param itemname
   * @param itemprice 
   * @return TRUE: success ; FALSE: failed
   */
  newitem(itemname: string, itemprice: string, description: string, catalog: string, sellerid: string):Observable<boolean> {
    const url = 'http://localhost:8080/newitem';
    console.log(sellerid)
    return this.httpClient.post<boolean>(url,{itemname,itemprice,description,catalog,sellerid});
  }

}
