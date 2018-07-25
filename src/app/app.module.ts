import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';

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
        path: "**",
        component: NotfoundComponent
      }
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
