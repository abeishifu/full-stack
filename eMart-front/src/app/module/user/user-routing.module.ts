import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../components/login/login.component';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ListCosmeticsComponent } from './components/list-cosmetics/list-cosmetics.component';
import { ListGirlsComponent } from './components/list-girls/list-girls.component';
import { ListMaternityComponent } from './components/list-maternity/list-maternity.component';
import { ListWomenComponent } from './components/list-women/list-women.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from '../../cart/cart.component';
import { CartService } from '../../cart.service';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: '', component: UserComponent,
    children:[ 
      { path: '', component: IndexComponent},
      { path: 'women', component: ListWomenComponent },
      { path: 'maternity', component: ListMaternityComponent },
      { path: 'girls', component: ListGirlsComponent },
      { path: 'cosmetics', component: ListCosmeticsComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
    ]
 },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
