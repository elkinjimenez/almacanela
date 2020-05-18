import { Component, OnInit, Host, Optional } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  volverAtrás = { estado: false, ruta: '' };
  menu = { estado: true, clase: 'menu-activo', campos: 'poblar-menu' };

  constructor(
    @Host() @Optional() public init: AppComponent,
  ) { }

  ngOnInit(): void { }

}
