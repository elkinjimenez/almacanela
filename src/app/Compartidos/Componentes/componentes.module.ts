import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNotificaComponent } from './modal-notifica/modal-notifica.component';
import { DatosVaciosComponent } from './datos-vacios/datos-vacios.component';
import { VolverComponent } from './volver/volver.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ModalNotificaComponent,
    DatosVaciosComponent,
    VolverComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ModalNotificaComponent,
    DatosVaciosComponent,
    VolverComponent
  ]
})
export class ComponentesModule { }
