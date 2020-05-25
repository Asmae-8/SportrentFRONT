import { Component, OnInit } from '@angular/core';
import {CaddyService} from "../services/caddy.service";
import {ProductItem} from "../model/product-item.model";
import {Caddy} from "../model/caddy.model";
import {Router} from "@angular/router";
import {CatalogueService} from "../services/catelogue.service";

@Component({
  selector: 'app-caddies',
  templateUrl: './caddies.component.html',
  styleUrls: ['./caddies.component.css']
})
export class CaddiesComponent implements OnInit {
  public caddy: Caddy;
  public  total: number;
  public caddies: Caddy[];
  private data: Caddy[];


  constructor(private catService:CatalogueService, private router:Router,
              public caddyService:CaddyService ) { }

  ngOnInit(): void {
    this.recupererLePanier();
  }



  /* onRemoveProductFromCaddy(id:number):void {
     //this.caddyService.removeProduct(p.id);
     let caddy=this.caddyService.caddies[this.caddyService.currentCaddyName];
     delete caddy.items[id];
     this.caddyService.saveCaddies();
   }*/
  onRemoveProductFromCaddy(produit: Caddy) {
    this.caddies.forEach((item, index) => {
      if (item === produit) this.caddies.splice(index, 1);
    });
    localStorage.setItem("Caddies",JSON.stringify(this.caddies));
    this.caddies.forEach((element) => {
      this.total +=element.price ;
    })

  }


  onNewOrder() {
    this.router.navigateByUrl("/client");
  }

  recupererLePanier() {
    this.total = 0;
    this.data=JSON.parse(localStorage.getItem("Caddies"));
    console.log(this.data);
    if(this.data != null ){
      this.caddies = this.data;
      this.caddies.forEach((element) => {
        this.total +=element.price ;
      })
    }
  }

  onProductDetails(id: number) {
    this.router.navigate(['/productDetails',+id]);
  }
}

