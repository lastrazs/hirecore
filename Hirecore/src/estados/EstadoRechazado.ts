import { EstadoBase } from "./EstadoBase";

export class EstadoRechazado extends EstadoBase {
  nombreEstado(): string {
    return "RECHAZADO";
  }

  transicion(): string | null {
    return null;
  }
}