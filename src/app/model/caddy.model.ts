import {ProductItem} from "./product-item.model";
import {Client} from "./client.model";
import {Product} from "./product.model";


export class Caddy{
  public produit : Product ;
  public quantite : number ;
  public price:number;
  public items?:Map<number,ProductItem>=new Map();
  public client?:Client;





}
