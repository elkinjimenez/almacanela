import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getLogin(usu: string, pass: string) {
    const URL = 'http://localhost:8080/wsalmacanela/webresources/entity.usuario/login?usuario=' + usu + '&clave=' + pass;
    return this.http.get(URL);
  }
}
