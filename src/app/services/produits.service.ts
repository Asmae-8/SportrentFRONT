import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import {Client} from "../model/client.model";
import {VariablesGlobalesService} from "./variables-globales.service";

@Injectable()
export class ProduitsService {


  constructor(private http: HttpClient) { }

  getAllProductsFromDataBase():Observable<any>{
    return this.http.get<any>(VariablesGlobalesService.base_URL+'/products');
  }
  uploadPhoto(p):Observable<any>{
    return  this.http.patch<any>(VariablesGlobalesService.base_URL+'/modifyPicture',p);

  }
  getCurrentClient(productid:number):Observable<Client>{
    return this.http.get<Client>(VariablesGlobalesService.base_URL+'/products/'+productid+'/client');
  }
}
