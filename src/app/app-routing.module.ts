import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { PurchaseComponent } from './pages/Purchase/purchase/purchase.component';
import { ContanctsComponent } from './pages/Contacts/contancts/contancts.component';
import { ProductsComponent } from './pages/products/products.component';
import { BazaryabanComponent } from './pages/bazaryaban/bazaryaban.component';
import { ElambarComponent } from './pages/elambar/elambar.component';
import { VCFtoEXELComponent } from './pages/vcfto-exel/vcfto-exel.component';
import { NobatdehiComponent } from './pages/nobatdehi/nobatdehi.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Products',
    component:ProductsComponent,
  },
  {
    path:'Products/Bazaryaban',
    component:BazaryabanComponent
  },
  {
    path:'Products/Elambar',
    component:ElambarComponent
  },
  {
    path:'Products/VCFtoEXEL',
    component:VCFtoEXELComponent
  },
  {
    path:'Products/Nobatdehi',
    component:NobatdehiComponent,
  },
  {
    path:'Purchase',
    component:PurchaseComponent
  },
  {
    path:'Contacts',
    component:ContanctsComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
