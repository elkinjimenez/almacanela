import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos/modulos.component';
import { NabvarComponent } from './nabvar/nabvar.component';
import { PersistenceModule } from 'angular-persistence';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LateralComponent } from './lateral/lateral.component';
import { InfoComponent } from './info/info.component';
import { ComponentesModule } from 'src/app/Compartidos/Componentes/componentes.module';

@NgModule({
  declarations: [
    ModulosComponent,
    NabvarComponent,
    LateralComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    PersistenceModule,
    AppRoutingModule,
  ], exports: [
    ModulosComponent,
    ComponentesModule
  ]
})
export class MenuModule { }
