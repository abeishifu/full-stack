import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
// import { LoginComponent } from '../../components-user/login/login.component';
// import { RegisterComponent } from '../../components-user/register/register.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
// import { IndexComponent } from './components/index/index.component';
// import { ListCosmeticsComponent } from './components/list-cosmetics/list-cosmetics.component';
// import { ListGirlsComponent } from './components/list-girls/list-girls.component';
// import { ListMaternityComponent } from './components/list-maternity/list-maternity.component';
// import { ListWomenComponent } from './components/list-women/list-women.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { CartComponent } from '../../cart/cart.component';
// import { CartService } from '../../cart.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [  
    UserComponent,
    TopBarComponent,
    // IndexComponent
  ],
  imports: [
    UserRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class UserModule { }
