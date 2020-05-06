import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListCosmeticsComponent } from './components/list-cosmetics/list-cosmetics.component';
import { ListGirlsComponent } from './components/list-girls/list-girls.component';
import { ListMaternityComponent } from './components/list-maternity/list-maternity.component';
import { ListWomenComponent } from './components/list-women/list-women.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { IndexComponent } from './components/index/index.component';


@NgModule({
   declarations: [
      AppComponent,
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
         // { path: 'login', component: UserLoginComponent },
         { path: 'women', component: ListWomenComponent },
         { path: 'maternity', component: ListMaternityComponent },
         { path: 'girls', component: ListGirlsComponent },
         { path: 'cosmetics', component: ListCosmeticsComponent },
         { path: 'products/:productId', component: ProductDetailsComponent },
         { path: 'cart', component: CartComponent },
         // { path: 'login', loadChildren: "./module/user/user.module#UserModule"}
   
      ]),
      NgbModule
   ],
   providers: [CartService],
   bootstrap: [AppComponent]

})

export class AppModule { }
