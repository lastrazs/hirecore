import { EstadoBase } from "./EstadoBase";

export class EstadoAplicado extends EstadoBase {
    nombreEstado(): string {
        return "VERIFICACION_REFERENCIAS";
    }
    transicion(): string | null {
        return "CONTRATADO";
    }
}