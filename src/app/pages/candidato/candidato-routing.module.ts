import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsginarCandidatoComponent } from './asginar-candidato/asginar-candidato.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [

  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'asignarCandidato/:id',
    component: AsginarCandidatoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoRoutingModule { }
