import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { FilterPipe } from './shared/filter.pipe';

import { HeaderComponent } from './header/header.component';
import { SouthindianComponent } from './southindian/southindian.component';
import { VegComponent } from './veg/veg.component';
import { Nonveg1Component } from './nonveg1/nonveg1.component';
import { CartComponent } from './cart/cart.component';

import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';

import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { FamousdishListComponent } from './famousdish-list/famousdish-list.component';
import { DishService } from './dish.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { DishpageComponent } from './dishpage/dishpage.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
   
    FilterPipe,
    
    HeaderComponent,
    SouthindianComponent,
    VegComponent,
    Nonveg1Component,
    CartComponent,
   
    CheckoutComponent,
   
    AdminDashbordComponent,
         FamousdishListComponent,
         DishpageComponent,
         OrderdetailsComponent,
         
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule ,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
