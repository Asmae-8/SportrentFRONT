import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../services/catelogue.service";
import {Product} from "../model/product.model";
import {HttpEventType, HttpResponse} from "@angular/common/http";
// @ts-ignore
import Any = jasmine.Any;
import {Client} from "../model/client.model";
import {CaddyService} from "../services/caddy.service";
import {ProduitsService} from "../services/produits.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[ProduitsService]
})
export class ProductDetailComponent implements OnInit {
  public currentProduct:Product;
  public currentClient:Client;
  public clientLink:string;
  public editPhoto: boolean;
  public selectedFiles: Any;
  public progress: number;
  public currentFileUpload: any;
  public timestamp: number;
  public mode: Number=0;

  constructor(private router:Router , private route:ActivatedRoute
    , public catalService:CatalogueService,
              public caddyService:CaddyService,
              public produitsService:ProduitsService
              // public authService:AuthenticationService
  ) { }

  ngOnInit(){

    let id = this.route.snapshot.paramMap.get('id');
    this.catalService.getProduct(id).subscribe(data=>{
      console.log(data);
      this.currentProduct=data;
      this.getClient();})




  }
  onEditPhoto(p) {
    this.currentProduct=p;
    this.editPhoto=true;
  }

  onSelectedFile(event) {
    this.selectedFiles=event.target.files;

  }

  uploadPhoto() {

    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0)
    this.catalService.uploadPhotoProduct(this.currentFileUpload, this.currentProduct.id).subscribe(event => {

      if(event.type === HttpEventType.UploadProgress){

        this.progress = Math.round(100 * event.loaded / event.total);
        console.log(this.progress);
      } else if(event instanceof HttpResponse){
        //this.getProducts('/products/search/selectedProducts');
        //alert("Fin de telechargement")
        this.timestamp=Date.now();
      }
    },err =>{
      alert("Probleme de chargement")
    })
    this.selectedFiles= undefined

  }

  getTS() {
    return this.timestamp;
  }


  public isAdmin() {
    //return this.authService.isAdmin();
  }
  onUpdateProduct(data){

  }

  onAddProductToCaddy(p: Product) {
    this.caddyService.addProductToCaddy(p);

  }


  onEditProduct() {
    this.mode=1;
  }

  getClient(){
    this.produitsService.getCurrentClient(this.currentProduct.id).subscribe(data=>{
      this.currentClient= data ;
    });
  }


}
