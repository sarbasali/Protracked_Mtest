import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/UserAuth/login/login.component';
import { SignUpComponent } from './component/UserAuth/sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { FilerPipe } from './filter/filer.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
   
    HomePageComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    CheckOutComponent,
    FilerPipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
