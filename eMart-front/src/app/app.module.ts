import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListCosmeticsComponent } from './list-cosmetics/list-cosmetics.component';
import { ListGirlsComponent } from './list-girls/list-girls.component';
import { ListMaternityComponent } from './list-maternity/list-maternity.component';
import { ListWomenComponent } from './list-women/list-women.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { IndexComponent } from './index/index.component';


@NgModule({
   declarations: [
      AppComponent,
      UserLoginComponent,
      TopBarComponent,
      ListWomenComponent,
      ListMaternityComponent,
      ListGirlsComponent,
      ListCosmeticsComponent,
      ProductDetailsComponent,
      CartComponent,
      IndexComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot([
         { path: '', component: IndexComponent},
         { path: 'login', component: UserLoginComponent },
         { path: 'women', component: ListWomenComponent },
         { path: 'maternity', component: ListMaternityComponent },
         { path: 'girls', component: ListGirlsComponent },
         { path: 'cosmetics', component: ListCosmeticsComponent },
         { path: 'products/:productId', component: ProductDetailsComponent },
         { path: 'cart', component: CartComponent },
   
      ])
   ],
   providers: [CartService],
   bootstrap: [AppComponent]

})

export class AppModule { }
