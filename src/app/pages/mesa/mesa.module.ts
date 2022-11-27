import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesaRoutingModule } from './mesa-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ActualizarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    MesaRoutingModule
  ]
})
export class MesaModule { }
