import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

         { path: '', loadChildren: './module/user/user.module#UserModule'}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
//   providers: [CartService],
//   bootstrap: [AppComponent]

})
export class AppRoutingModule { }
