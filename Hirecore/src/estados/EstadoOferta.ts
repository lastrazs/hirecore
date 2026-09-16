import { EstadoBase } from "./EstadoBase";

export class EstadoAplicado extends EstadoBase {
    nombreEstado(): string {
        return "OFERTA";
    }
    transicion(): string | null {
        return "VERIFICACION_REFERENCIAS";
    }
}