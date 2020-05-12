import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarReferenciasComponent } from './Referencias/listar-referencias/listar-referencias.component';
import { VerReferenciasComponent } from './Referencias/ver-referencias/ver-referencias.component';
import { ListarMoldesComponent } from './Moldes/listar-moldes/listar-moldes.component';
import { VerMoldeComponent } from './Moldes/ver-molde/ver-molde.component';
import { EditarMoldeComponent } from './Moldes/editar-molde/editar-molde.component';
import { EliminarMoldeComponent } from './Moldes/eliminar-molde/eliminar-molde.component';

@NgModule({
  declarations: [
    ListarReferenciasComponent,
    VerReferenciasComponent,
    ListarMoldesComponent,
    VerMoldeComponent,
    EditarMoldeComponent,
    EliminarMoldeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReferenciasModule { }
