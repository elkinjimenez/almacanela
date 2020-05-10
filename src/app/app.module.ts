import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangingModule } from './Modulos/langing/langing.module';
import { MenuModule } from './Modulos/menu/menu.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalNotificaComponent } from './Compartidos/modal-notifica/modal-notifica.component';
import { PersistenceModule } from 'angular-persistence';

@NgModule({
  declarations: [
    AppComponent,
    ModalNotificaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LangingModule,
    MenuModule,
    FormsModule,
    HttpClientModule,
    PersistenceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
