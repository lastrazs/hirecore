import { Usuario } from "./Usuario";
import { Candidato } from "../core/Candidato";
import { Estado } from "../estados/Estado";

export class Comando {
  constructor(
    public readonly usuario: Usuario,
    public readonly candidato: Candidato,
    public readonly estadoAnterior: Estado,
    public readonly estadoNuevo: Estado,
    public readonly timestamp: Date
  ) {}
}
