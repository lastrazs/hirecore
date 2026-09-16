import { EstadoBase } from "./EstadoBase";

export class EstadoOferta extends EstadoBase {
  nombreEstado(): string {
    return "OFERTA";
  }

  transicion(): string | null {
    return "VERIFICACION_REFERENCIAS";
  }
}