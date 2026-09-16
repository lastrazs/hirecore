import { EstadoBase } from "./EstadoBase";

export class EstadoPruebaTecnica extends EstadoBase {
  nombreEstado(): string {
    return "PRUEBA_TECNICA";
  }

  transicion(): string | null {
    return "OFERTA";
  }
}