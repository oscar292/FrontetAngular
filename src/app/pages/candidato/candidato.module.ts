import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatoRoutingModule } from './candidato-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AsginarCandidatoComponent } from './asginar-candidato/asginar-candidato.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ActualizarComponent,
    EliminarComponent,
    AsginarCandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    NbCardModule,
    FormsModule,
  ]
})
export class CandidatoModule { }
