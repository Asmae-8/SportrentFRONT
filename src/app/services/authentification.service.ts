import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VariablesGlobalesService} from "./variables-globales.service";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = false;



  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {
    if (credentials) {
      const token = btoa(credentials.username + ':' + credentials.password);
      const headers = new HttpHeaders({
        authentication: 'Basic' + token
      });

      this.http.get(VariablesGlobalesService.base_URL, {headers: headers}).subscribe(reponse => {
        if (reponse['name']) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
        return callback && callback();

      });
    }
    else {
      this.authenticated = false;
    }
    return'';
  }
}


    /*const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    const listeUser = this.getListeUser()
    */


    // @ts-ignore
      //var json = JSON.parse(listeUser)

    //console.log("ListeUser :"+json.nom)

    /*this.http.get(' ', {headers: headers}).subscribe(response => {
      console.log(response)
      if (response['nom']) {
        this.authenticated = true;

      } else {
        this.authenticated = false;
        console.log("Test")
      }
      return callback && callback();
    });*/




  /*isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  getListeUser(){
    return this.http.get(`${this.host}`)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
*/
