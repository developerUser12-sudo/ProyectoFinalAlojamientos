import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { AlquilercochesComponent } from './alquilercoches/alquilercoches.component';
import { PaneladministracionComponent } from './paneladministracion/paneladministracion.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    VuelosComponent,
    HotelesComponent,
    AlquilercochesComponent,
    PaneladministracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
