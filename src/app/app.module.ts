import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AntDesModule } from 'core/ant-des.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/Home/home/home.component';
import { ContanctsComponent } from './pages/Contacts/contancts/contancts.component';
import { PurchaseComponent } from './pages/Purchase/purchase/purchase.component';
import { registerLocaleData } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { BazaryabanComponent } from './pages/bazaryaban/bazaryaban.component';
import { ElambarComponent } from './pages/elambar/elambar.component';
import { NobatdehiComponent } from './pages/nobatdehi/nobatdehi.component';
import { VCFtoEXELComponent } from './pages/vcfto-exel/vcfto-exel.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthServiceService } from './auth/auth.service.service';
registerLocaleData(fr);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContanctsComponent,
    PurchaseComponent,
    ProductsComponent,
    BazaryabanComponent,
    ElambarComponent,
    NobatdehiComponent,
    VCFtoEXELComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    AntDesModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
  AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
