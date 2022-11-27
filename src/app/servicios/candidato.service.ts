import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model';

@Injectable({
  providedIn: 'root'
})

export class CandidatoService {

  constructor(private http: HttpClient) { }


  crear(elCandidato: Candidato) {
    return this.http.post<Candidato>(`${environment.url_gateway}/candidato`,elCandidato)
  }

  listar(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${environment.url_gateway}/candidato`);
  }

  getCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(`${environment.url_gateway}/candidato/${id}`)
  }

  editar(id: string, elCandidato: Candidato) {
    return this.http.put(`${environment.url_gateway}/candidato/${id}`, elCandidato)
  }

  asignarPartido(idCandidato: string, idPartido: string) {
    return this.http.put(`${environment.url_gateway}/candidato/${idCandidato}/partido/${idPartido}`, null)
  }

  eliminar(id: string) {
    return this.http.delete<Candidato>(`${environment.url_gateway}/candidato/${id}`,
    );
  }

}
