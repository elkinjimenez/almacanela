import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangingModule } from './Modulos/langing/langing.module';
import { PagesComponent } from './Modulos/langing/pages/pages.component';


const routes: Routes = [
  { path: 'home', component: PagesComponent },
  // { path: '**', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
