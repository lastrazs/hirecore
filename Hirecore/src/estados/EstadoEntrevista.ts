import { EstadoBase } from "./EstadoBase";

export class EstadoEntrevista extends EstadoBase {
  nombreEstado(): string {
    return "ENTREVISTA";
  }

  transicion(): string | null {
    return "PRUEBA_TECNICA";
  }
}