import { EstadoBase } from "./EstadoBase";

export class EstadoContratado extends EstadoBase {
  nombreEstado(): string {
    return "CONTRATADO";
  }

  transicion(): string | null {
    return null;
  }
}