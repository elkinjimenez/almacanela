import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { LogueoComponent } from './logueo/logueo.component';



@NgModule({
  declarations: [PagesComponent, LogueoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PagesComponent
  ]
})
export class LangingModule { }
