import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './module/user/user.module';
import { TopBarComponent } from './module/user/components/top-bar/top-bar.component';
import { IndexComponent } from './module/user/components/index/index.component';
import { ListWomenComponent } from './module/user/components/list-women/list-women.component';
import { ListMaternityComponent } from './module/user/components/list-maternity/list-maternity.component';
import { ListGirlsComponent } from './module/user/components/list-girls/list-girls.component';
import { ListCosmeticsComponent } from './module/user/components/list-cosmetics/list-cosmetics.component';
import { ProductDetailsComponent } from './module/user/components/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      IndexComponent,
      ListWomenComponent,
      ListMaternityComponent,
      ListGirlsComponent,
      ListCosmeticsComponent,
      ProductDetailsComponent,
      CartComponent,
      
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      UserModule,
      
   ],
   bootstrap: [AppComponent]

})

export class AppModule { }
