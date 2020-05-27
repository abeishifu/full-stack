import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../../../../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newitem: FormGroup;
  constructor(private router:Router,private userService:UserService) { }
  id = sessionStorage.getItem("userid") 
  ngOnInit() {
    this.newitem = new FormGroup({
      itemname: new FormControl(''),
      itemprice: new FormControl(''),
      description: new FormControl(''),
      catalog: new FormControl(''),
    });
  }

  onSubmit() {
    const itemname = this.newitem.get('itemname').value;
    const itemprice = this.newitem.get('itemprice').value;
    const description = this.newitem.get('description').value;
    const catalog = this.newitem.get('catalog').value;
    const sellerid = this.id;
    this.userService.newitem(itemname,itemprice,description,catalog,sellerid).subscribe(result =>{
      console.log(sellerid);
      if (result) {
        console.log(result);
        this.router.navigate(['./../login']);
        // this.userService.setIsLogin(true);
      } else {
        alert('wrong user name or password');
      }
    })
    
  }

}
