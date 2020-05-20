import { Component, OnInit } from '@angular/core';
import { LineaService } from 'src/app/Servicios/linea.service';
import { Linea } from 'src/app/Modelos/linea';

@Component({
  selector: 'app-crear-molde',
  templateUrl: './crear-molde.component.html',
  styleUrls: ['./crear-molde.component.css']
})
export class CrearMoldeComponent implements OnInit {

  listadoLineas: Linea[];

  constructor(
    private lineaServicio: LineaService
  ) { }

  ngOnInit(): void {
    this.consumirLineas();
  }

  consumirLineas() {
    this.lineaServicio.getLineas().subscribe(
      data => {
        console.log('Listado de lineas: ', data);
        this.listadoLineas = data as Linea[];
      }, error => {
        console.log('Error listado lineas: ', error);
      }
    );
  }

}
