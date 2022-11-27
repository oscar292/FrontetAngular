import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { Partido } from '../../../modelos/partido.model';
import { CandidatoService } from '../../../servicios/candidato.service'
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_candidatos: string = "";
  listadoPartidos: Partido[] = [];
  intentoEnvio: boolean = false;

  elCandidato: Candidato = {
    cedula: "",
    numero_resolucion: "",
    nombre: "",
    apellido: "",
    partido: {}
  }

  constructor(private miServicioCandidato: CandidatoService,
    private miServicioPartido: PartidoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_candidatos) {
      this.modoCreacion = false;
      this.id_candidatos = this.rutaActiva.snapshot.params.id_candidatos;
      this.listarPartidos();
      this.getCandidato(this.id_candidatos)
    } else {
      this.modoCreacion = true;
    }
  }


  listarPartidos(): void {
    this.miServicioPartido.listar().
      subscribe(data => {
        this.listadoPartidos = data;
      });
  }

  getCandidato(id: string) {
    this.miServicioCandidato.getCandidato(id).
      subscribe(data => {
        this.elCandidato = data;
      });
  }


  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioCandidato.crear(this.elCandidato).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El estudiante ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/candidatos/listar"]);
        });
    }

  }

  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioCandidato.editar(this.elCandidato._id, this.elCandidato).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El estudiante ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/estudiantes/listar"]);
        });
    }

  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elCandidato.cedula == "",
      this.elCandidato.numero_resolucion == "",
      this.elCandidato.nombre == "",
      this.elCandidato.apellido == "") {

      return false;
    } else {
      return true;
    }
  }

}
