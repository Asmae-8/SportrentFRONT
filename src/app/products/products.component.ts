import {Component, OnInit} from '@angular/core';
import {CatalogueService} from '../services/catelogue.service';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {HttpEventType, HttpResponse} from "@angular/common/http";
//import {Component, NgModule, OnInit} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";
//import {AuthenticationService} from "../sevices/authentication.service";
import {Product} from "../model/product.model";

import { ProduitsService } from '../services/produits.service';
import {CaddyService} from "../services/caddy.service";
import {ProductItem} from "../model/product-item.model";

//import {CaddyService} from "../services/caddy.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[CatalogueService,ProduitsService]
})
export class ProductsComponent implements OnInit {
  public products;
  public editPhoto: boolean;

  currentProduct: any;
  selectedFiles;
  progress: number;
  currentFileUpload: any;
  title:string;
  timestamp:number=0;
  linkOfPicture:string;
  public currentCategorie;
  categories;





  constructor(public  catService:CatalogueService,
              public route:ActivatedRoute , public router:Router,
              //public authService:AuthenticationService,
              public produitsService: ProduitsService,
              public caddyService:CaddyService
  ) {}
  ngOnInit() {

    this.getCategories();
    this.getProductsFromDataBase();

    this.router.events.subscribe((val ) => {
      if (val instanceof NavigationEnd) { // si val est de type NavigationEnd
        let url = val.url; //lorsqu on navigue on recupere l'url
        console.log(url);
        let p1 = this.route.snapshot.params.p1;
        if (p1 == 1) {
          this.title="Selections";
          this.getProducts('/products/search/selectedProducts');
        } else if (p1 == 2) {
          let idCat = this.route.snapshot.params.p2;
          this.title="Produits de la categorie "+idCat ;
          this.getProducts('/categories/' + idCat + '/products');
        }
        else if (p1 == 3) {
          this.title="Produits en promotion";
          this.getProducts('/products/search/promoProducts');
        }
        else if (p1 == 4) {
          this.title="Produits Disponibles";
          this.getProducts('/products/search/dispoProducts');
        }
        else if (p1 == 5) {
          this.title="Recherche..";
          this.getProducts('/products/search/productsByKeyword');
        }


      }
    });

    let p1 = this.route.snapshot.params.p1;
    if (p1 == 1) {
      this.getProducts('/products/search/selectedProducts');
    }
  }
  private getProducts(url) {
    this.catService.getResource(url)
      .subscribe(data=>{
        this.products=data;
      }),err=>{
      console.log(err);
    }
  }

  onEditPhoto(p) {
    this.currentProduct=p;
    this.editPhoto=true;
  }

  onSelectedFile(event) {
    this.selectedFiles=event.target.files;

  }


  uploadPhoto(p) {
    if(this.linkOfPicture != null && this.linkOfPicture !=""){
      p.photo="https://drive.google.com/thumbnail?id="+this.linkOfPicture;
      this.produitsService.uploadPhoto(p).subscribe(data=> {console.log(data)});

    }

  }
  getTS() {
    return this.timestamp;
  }

  onProductDetails(id) {

    this.router.navigate(['/productDetails',+id]);
  }

  public isAdmin() {
    //return this.authService.isAdmin();
  }

  onAddProductToCaddy(p: Product) {
    //Methode asynchrone
    this.caddyService.addProductToCaddy(p);

  }


  onSaveProduct(data: any) {
    let conf=confirm("Enregistrer le produit ?");
    if(conf) {
      this.catService.saveResource(this.catService.host + "/addproduit", data)
        .subscribe(res => {
          console.log(res);
        }, error => {
          console.log(error);
        })
    }
  }

  //-------------------------------
  public searchTerm: string = "";
  productsAffichees: Product[];
  getProductsFromDataBase(){
    this.produitsService.getAllProductsFromDataBase().subscribe(data=>{
      console.log(data);
      this.products=data
      this.setFilteredItems();
    })
  }


  onfindProductsByKeyword() {
    this.currentCategorie=undefined;
    this.router.navigateByUrl("/products/productsByKeyword");
  }



  private getCategories() {
    this.catService.getResource(this.catService.host+"/categories")
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err);
      })
  }

  getProductsByCat(c) {
    this.currentCategorie=c;
    this.router.navigateByUrl('/products/2/'+c.id);
  }

  //Fonctions de recherche
  filterItems(searchTerm) {
    if (searchTerm == '') {
      //this.products = this.categories.produits;
    }
    console.log("Asmae");
    return this.products._embedded.products.filter(product => {
      return product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  setFilteredItems() {
    console.log(this.productsAffichees);
    this.productsAffichees = this.filterItems(this.searchTerm);

  }
}




