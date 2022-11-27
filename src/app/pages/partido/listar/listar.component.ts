import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  partido = [];
  nombresColumnas: string[] = ['nombre', 'lema', "Opciones"];

  constructor(private miServicioPartido: PartidoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.miServicioPartido.listar().
      subscribe(data => {
        this.partido = data;
      });
  }

  agregar(): void {
    this.router.navigate(["pages/partido/crear"]);
  }
  editar(id: string): void {
    this.router.navigate(["pages/partido/actualizar/" + id]);
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar partido',
      text: "Está seguro que quiere eliminar el candidato?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioPartido.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El partido ha sido eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }

}
