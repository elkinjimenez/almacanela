import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from './data-source.service';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  constructor(
    private http: HttpClient,
    private dataSource: DataSourceService,
  ) { }

  getComponentePorIdParte() {
    const URL = this.dataSource.server + 'http://localhost:8080/wsalmacanela/webresources/entity.componente/porIdParte?idParte=1';
    return this.http.get(URL);
  }

}
