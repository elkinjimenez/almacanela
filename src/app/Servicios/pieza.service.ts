import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';

@Injectable({
  providedIn: 'root'
})
export class PiezaService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getPartePorIdLinea() {
    const URL = this.dataSource.server + 'http://localhost:8080/wsalmacanela/webresources/entity.pieza/porIdComponente?idComponente=22';
    return this.http.get(URL);
  }

}
