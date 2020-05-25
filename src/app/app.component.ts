import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "./services/catelogue.service";
import {Router} from "@angular/router";
import {CaddyService} from "./services/caddy.service";
import { TokenStorageService } from './auth/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  categories;
  currentCategorie;
  private roles: string[];
  public authority: string;


  constructor(public catService:CatalogueService,
              private  router:Router,
              public caddyService:CaddyService,private tokenStorage: TokenStorageService,
//  public authService:AuthenticationService
  ){}

  ngOnInit(): void {
    this.getCategories();


    //this.authService.loadUser();
   // if(this.authService.isAuthenticated())
      //this.caddyService.loadCaddyFromLocalStorage();
  }

  private getCategories() {


    this.catService.getResource(this.catService.host+"/categories")
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err);
      });
  }

  getProductsByCat(c) {
    this.currentCategorie=c;
    this.router.navigateByUrl('/products/2/'+c.id);
  }

  onSelectedProducts() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/1/0");
  }

  onProductsPromo() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/3/0");
  }

  onProductsDispo() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/4/0");
  }



  onSaveProduct(value: any) {

  }
  title = 'eco-web';

}
