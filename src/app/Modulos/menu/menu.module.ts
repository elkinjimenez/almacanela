import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos/modulos.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { PersistenceModule } from 'angular-persistence';

@NgModule({
  declarations: [ModulosComponent, NabvarComponent],
  imports: [
    CommonModule,
    PersistenceModule
  ], exports: [
    ModulosComponent,
  ]
})
export class MenuModule { }
