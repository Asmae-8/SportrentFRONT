import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PmComponent } from './pm/pm.component';
import {NouveauMembreComponent} from './register/nouveau-membre.component';

import {ProductsComponent} from "./products/products.component";
import {CaddiesComponent} from "./caddies/caddies.component";
import {ClientComponent} from './client/client.component';
import {ProductComponent} from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { AddFormComponent } from './add-form/add-form.component';
import {MembreComponent} from './login/membre.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {ProductDetailComponent} from "./product-detail/product-detail.component";



const routes: Routes = [
  {
    path: 'accueil',
    component: BannerComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo:  'accueil',
    pathMatch: 'full'
  },
  {
    path: "signup", component: NouveauMembreComponent
  },
  {
    path: 'add',
    component: AddFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent
  },
  {path: 'admin',
    component: AdminComponent
  },
  {
    path: 'pm',
    component: PmComponent
  },
  {path:'products/:p1/:p2',component:ProductsComponent},
  {path:'',redirectTo:'products/1/0',pathMatch:'full'},
  {path:'auth/membre', component:MembreComponent},
  {path:'caddies', component:CaddiesComponent},
  {path:'client', component:ClientComponent},
 {path:'product/:id', component:ProductComponent},
  {path:"productDetails/:id" , component:ProductDetailComponent, pathMatch: 'full'} ,
  {path: "produits", component:ProductsComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
