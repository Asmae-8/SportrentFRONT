import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MembreComponent } from './login/membre.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

import { NouveauMembreComponent } from './register/nouveau-membre.component';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from "./products/products.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PmComponent } from './pm/pm.component';

import {CaddiesComponent} from "./caddies/caddies.component";
import { NavbarComponent } from './navbar/navbar.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent} from "./product-detail/product-detail.component";

import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AddFormComponent } from './add-form/add-form.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MembreComponent,
    UserComponent,
    AdminComponent,
    NouveauMembreComponent,
    ConfirmEqualValidatorDirective,
    CaddiesComponent,
    ProductDetailComponent,
    PmComponent,
    NavbarComponent,
    ClientComponent,
    ProductComponent,
    BannerComponent,
    FooterComponent,
    AddFormComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
