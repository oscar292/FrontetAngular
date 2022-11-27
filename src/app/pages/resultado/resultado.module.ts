import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    EliminarComponent,
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    ResultadoRoutingModule
  ]
})
export class ResultadoModule { }
