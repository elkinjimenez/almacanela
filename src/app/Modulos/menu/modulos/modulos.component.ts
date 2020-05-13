import { Component, OnInit, Host, Optional } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  volverAtrás = { estado: false, ruta: '' };
  menu = { icono: 'fas fa-angle-up fadeInUp', estado: true, clase: 'menu-activo', campos: 'poblar-menu' };

  constructor(
    @Host() @Optional() public init: AppComponent,
  ) { }

  ngOnInit(): void { }

  accionarMenu() {
    if (this.menu.estado) {
      this.menu.clase = 'menu-inactivo';
      this.menu.campos = 'limpiar-menu';
      this.menu.icono = 'fas fa-angle-down fadeInDown';
    } else {
      this.menu.clase = 'menu-activo';
      this.menu.campos = 'poblar-menu';
      this.menu.icono = 'fas fa-angle-up fadeInUp';
    }
    this.menu.estado = !this.menu.estado;
  }

}
