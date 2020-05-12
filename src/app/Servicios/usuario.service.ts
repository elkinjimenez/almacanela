import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  server = 'https://almacanelalean.com';

  getLogin(usu: string, pass: string) {
    const URL = this.server + '/wsalmacanela/webresources/entity.usuario/login?usuario=' + usu + '&clave=' + pass;
    return this.http.get(URL);
  }
}
