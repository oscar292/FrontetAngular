import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partido } from '../modelos/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http: HttpClient) { }

  crear(elCandidato: Partido) {
    return this.http.post<Partido>(`${environment.url_gateway}/partido`,elCandidato)
  }

  listar(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${environment.url_gateway}/partido`);
  }

  getCandidato(id: string): Observable<Partido> {
    return this.http.get<Partido>(`${environment.url_gateway}/partido/${id}`)
  }

  editar(id: string, elCandidato: Partido) {
    return this.http.put(`${environment.url_gateway}/partido/${id}`, elCandidato)
  }

  getPartido(id: string): Observable<Partido> {
    return this.http.get<Partido>(`${environment.url_gateway}/partido/${id}`)
  }

  eliminar(id: string) {
    return this.http.delete<Partido>(`${environment.url_gateway}/partido/${id}`,
    );
  }
}
