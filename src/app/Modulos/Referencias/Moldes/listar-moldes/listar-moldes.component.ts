import { Component, OnInit } from '@angular/core';
import { MoldeService } from 'src/app/Servicios/molde.service';

@Component({
  selector: 'app-listar-moldes',
  templateUrl: './listar-moldes.component.html',
  styleUrls: ['./listar-moldes.component.css']
})
export class ListarMoldesComponent implements OnInit {

  moldes: any;

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
        this.moldes = data;
      }, error => {
        console.log('Error moldes: ', error);
      }
    )
  }

}
