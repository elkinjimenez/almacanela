import { Component, OnInit } from '@angular/core';
import { MoldeService } from 'src/app/Servicios/molde.service';
import { Molde } from 'src/app/Modelos/molde';

@Component({
  selector: 'app-listar-moldes',
  templateUrl: './listar-moldes.component.html',
  styleUrls: ['./listar-moldes.component.css']
})
export class ListarMoldesComponent implements OnInit {

  estado = 0;
  listadoMoldes: Molde[];

  constructor(
    private servicioMolde: MoldeService,
  ) { }

  ngOnInit(): void {
    this.consumirListaMoldes();
  }

  consumirListaMoldes() {
    this.servicioMolde.getMoldes().subscribe(
      data => {
        console.log('Moldes resp: ', data);
        this.listadoMoldes = data as Molde[];
        if (this.listadoMoldes.length > 0) {
          this.estado = 1;
        } else {
          this.estado = 2;
        }
      }, error => {
        console.log('Error moldes: ', error);
      }
    );
  }

}
