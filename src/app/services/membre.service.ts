import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {VariablesGlobalesService} from "./variables-globales.service";
@Injectable({
  providedIn: 'root'
})
export class MembreService {
  private userUrl = VariablesGlobalesService.base_URL+'/api/test/user';
  private pmUrl = VariablesGlobalesService.base_URL+'/api/test/pm';
  private adminUrl = VariablesGlobalesService.base_URL+'/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

}



