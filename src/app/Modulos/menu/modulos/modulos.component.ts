import { Component, OnInit, Host, Optional } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  menu = { icono: 'far fa-times-circle', estado: true, clase: 'menu-activo' };

  constructor(
    @Host() @Optional() public init: AppComponent,
  ) { }

  ngOnInit(): void {
  }

}
