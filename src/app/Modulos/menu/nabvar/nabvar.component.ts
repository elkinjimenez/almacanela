import { Component, OnInit, Host, Optional } from '@angular/core';
import { ModulosComponent } from '../modulos/modulos.component';
import { PersistenceService, StorageType } from 'angular-persistence';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  menu = 'menu-activo';

  constructor(
    @Host() @Optional() public modulos: ModulosComponent,
    private persistencia: PersistenceService,
  ) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    $('#modalUsuario').modal('hide');
    setTimeout(() => {
      this.modulos.init.logueado = false;
      this.persistencia.removeAll(StorageType.SESSION);
      this.persistencia.clean(StorageType.SESSION);
    }, 600);
  }

}
