import { Candidato } from "./candidato.model";
import { Mesa } from "./mesa.model";

export class Resultados {
  _id?:string;
  numero_mesa:Mesa;
  cedula_candidato:Candidato;
  numero_votos:string;
}
