import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
         { path: 'login', component: LoginComponent },
         { path: 'register', component: RegisterComponent},
         { path: '', loadChildren: './module/user/user.module#UserModule'}
   
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  // exports: [RouterModule],
//   providers: [CartService],
//   bootstrap: [AppComponent]

})
export class AppRoutingModule { }
