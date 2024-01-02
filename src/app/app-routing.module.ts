import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/UserAuth/sign-up/sign-up.component';
import { LoginComponent } from './component/UserAuth/login/login.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CartComponent } from './component/cart/cart.component';
import { AuthGuard } from './authCheck/auth.guard';
import { CheckOutComponent } from './component/check-out/check-out.component';

const routes: Routes = [
  {path :'' ,component :HomePageComponent},
  {path :'home' ,component :HomePageComponent},
  {path :'signup', component :SignUpComponent},
  {path :'login' ,component:LoginComponent},
  {path :'cart' , component:CartComponent ,},
  {path : 'checkout' ,component:CheckOutComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
 

})
export class AppRoutingModule { }
