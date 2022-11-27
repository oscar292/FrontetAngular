import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { CrearComponent } from './crear/crear.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [

  {
    path: 'crear',
    component: CrearComponent
    },
    {
      path: 'listar',
      component: ListarComponent
    },
    {
      path: 'actualizar',
      component: ActualizarComponent
    },
    {
      path: 'eliminar',
      component: EliminarComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidoRoutingModule { }
