import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { LogueoComponent } from './logueo/logueo.component';
import { FormsModule } from '@angular/forms';
import { PersistenceModule } from 'angular-persistence';

@NgModule({
  declarations: [PagesComponent, LogueoComponent],
  imports: [
    CommonModule,
    FormsModule,
    PersistenceModule
  ],
  exports: [
    PagesComponent
  ]
})
export class LangingModule { }
