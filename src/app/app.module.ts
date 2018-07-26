import { AuthGuard } from './auth-guard.service';
import { AuthenticationServiceService } from './authentication-service.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { NgModule, InjectionToken } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';


const firebaseConfig = {
  apiKey: "AIzaSyAkY1ImgdyGMe3CKQxTTZMnLoej7FDZf5U",
  authDomain: "shisha-shop.firebaseapp.com",
  databaseURL: "https://shisha-shop.firebaseio.com",
  projectId: "shisha-shop",
  storageBucket: "shisha-shop.appspot.com",
  messagingSenderId: "205593630887"
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    UserComponent,
    ProductsComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    OrdersComponent,
    LoginComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "shopping-cart",
        component: ShoppingCartComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: "user",
        component: UserComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'checkout', 
        component: CheckoutComponent
      },
      {
        path: "order-success",
        component: OrderSuccessComponent
      },
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "admin-orders",
        component: AdminOrdersComponent,
      },
      {
        path: "admin-products",
        component: AdminProductsComponent,
      },
      {
        path: "**",
        component: NotfoundComponent
      }
    ]),
    NgbModule.forRoot()
  ],
  providers: [
              AngularFireAuth, 
              AngularFireAuthModule, 
              AuthenticationServiceService,
              AuthGuard
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }