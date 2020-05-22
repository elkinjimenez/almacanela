import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ParteService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getPartePorIdLinea() {
    const URL = this.dataSource.server + 'http://localhost:8080/wsalmacanela/webresources/entity.parte/porIdLinea?idLinea=1';
    return this.http.get(URL);
  }

}
