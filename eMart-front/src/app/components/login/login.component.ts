import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  rootUrl = '../';
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      
    });
  }


  onSubmit() {
    const username = this.formGroup.get('username').value;
    const password = this.formGroup.get('password').value;
    this.userService.login(username,password).subscribe(result =>{
      if (result) {
        sessionStorage.setItem("role",result.userrole);
        sessionStorage.setItem("username",result.username);
        sessionStorage.setItem("userid",String(result.id));
        console.log(String(result.id))
        this.router.navigate(['./../']);
        // this.userService.setIsLogin(true);
      } else {
        alert('wrong user name or password');
      }
    })
    
  }
}
