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
// import { AuthGurd, PermissionService  } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Products',
    component: ProductsComponent,
    // canActivate: [AuthGurd],
  },
  {
    path: 'Products/Bazaryaban',
    component: BazaryabanComponent,
    // canActivate: [AuthGurd],
  },
  {
    path: 'Products/Elambar',
    component: ElambarComponent,
    // canActivate: [AuthGurd],
  },
  {
    path: 'Products/VCFtoEXEL',
    component: VCFtoEXELComponent,
    // canActivate: [AuthGurd],
  },
  {
    path: 'Products/Nobatdehi',
    component: NobatdehiComponent,
    // canActivate: [AuthGurd],
  },
  {
    path: 'Purchase',
    component: PurchaseComponent,
    // canActivate: [AuthGurd],
  },
  {
    path: 'Contacts',
    component: ContanctsComponent,
    // canActivate: [AuthGurd],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGurd],
  },
  {
    path: 'signup',
    component: SignupComponent,
    // canActivate: [AuthGurd],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // canActivate: [AuthGurd],
})
export class AppRoutingModule {}
