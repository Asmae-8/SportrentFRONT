import { Injectable } from '@angular/core';
import {Caddy} from "../model/caddy.model";
import {Product} from "../model/product.model";
import {ProductItem} from "../model/product-item.model";

@Injectable({
  providedIn: 'root'
})
export class CaddyService {
  currentCaddyName: string = "Caddy1";
  public caddies: Map<string, Caddy> = new Map();


  constructor() {
    /*let caddies=localStorage.getItem("MyCaddies");
    if(caddies){
      this.caddies=JSON.parse(caddies);
    }
    else{
      let caddy=new Caddy(this.currentCaddyName);
      this.caddies.set(this.currentCaddyName,caddy);

    }
*/
  }

  public addProductToCaddy(product: Product): void {
    let data: Caddy[];
    //ajout au Panier
    let ajoute$: boolean = false;
    data = JSON.parse(localStorage.getItem("Caddies"));
    localStorage.clear();
    //Si le pannier est vide:
    if (data === null || data.length === 0) {
      data = new Array();
      data.push({
        'price': product.currentPrice,
        'produit': product,
        'quantite': 1,
      });
    }
    //Si le pannier n'est pas vide:
    else {
      for (let i = 0; i < data.length; i++) {
        const elementPanier: Caddy = data[i];
        //Si Le panier contient déjà l'article:
        console.log(elementPanier);
        if (product.id === elementPanier.produit.id) {
          ajoute$ = true
        }
      }
      if (ajoute$ === false) {
        //Si Le panier ne contient pas l'article:

        data.push({

          'price': product.currentPrice,
          'produit': product,
          'quantite': 1,
        });

      }

    }
    localStorage.setItem("Caddies", JSON.stringify(data))

    console.log(data);
  }


  // public addProductToCaddy(product:Product):void{
  //productItem =new ProductItem();
  // productItem.price=product.currentPrice;
  // productItem.product=product ;
  //caddy.items[product.id]=productItem;
  //caddy.items.set(product.id,productItem);

  //this.saveCaddies();
  // console.log(productItem);}

  getCurrentCaddy(): Caddy {
    return this.caddies.get(this.currentCaddyName);
  }

  public getTotal(): number {
    let total = 0;
    let items: IterableIterator<ProductItem> = this.getCurrentCaddy().items.values();
    for (let pi of items) {
      total += pi.price;
    }
    return total;
  }

  public saveCaddies() {
    localStorage.setItem('mycaddies', JSON.stringify(this.caddies));

  }


  public removeProduct(id: number): void {
    let caddy = this.caddies[this.currentCaddyName];
    delete caddy.items[id];
    this.saveCaddies();
  }
}
