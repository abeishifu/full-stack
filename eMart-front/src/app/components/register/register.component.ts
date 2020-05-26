import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.register = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      mobilenum: new FormControl(''),
      email: new FormControl(''),
      userrole: new FormControl(''),
    });
  }

  onSubmit() {
    const username = this.register.get('username').value;
    const password = this.register.get('password').value;
    const mobilenum = this.register.get('mobilenum').value;
    const email = this.register.get('email').value;
    const userrole = this.register.get('userrole').value;
    this.userService.register(username,password,mobilenum,email,userrole).subscribe(result =>{
      console.log(mobilenum);
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
