import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { HotelesComponent } from './hoteles/hoteles.component';
import { AlquilercochesComponent } from './alquilercoches/alquilercoches.component';
import { PaneladministracionComponent } from './paneladministracion/paneladministracion.component';

const routes: Routes = [
  {path:'',component:BienvenidaComponent},
  {path:'bienvenida',component:BienvenidaComponent},
  {path:'vuelos',component:VuelosComponent},
  {path:'hoteles',component:HotelesComponent},
  {path:'alquilercoches',component:AlquilercochesComponent},
  {path:'paneladministracion',component:PaneladministracionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
