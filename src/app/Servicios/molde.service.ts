import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoldeService {

  constructor(private http: HttpClient) { }

  // server = 'https://almacanelalean.com';
  server = 'http://localhost:8080';

  getMoldes() {
    const URL = this.server + '/wsalmacanela/webresources/entity.molde';
    return this.http.get(URL);
  }

}
