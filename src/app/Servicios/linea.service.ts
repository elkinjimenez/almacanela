import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LineaService {

  constructor(private http: HttpClient) { }

  server = 'https://almacanelalean.com';
  // server = 'http://localhost:8080';

  getLineas() {
    const URL = this.server + '/wsalmacanela/webresources/entity.linea';
    return this.http.get(URL);
  }

}
