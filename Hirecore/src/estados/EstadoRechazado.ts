import { EstadoBase } from "./EstadoBase";

export class EstadoAplicado extends EstadoBase {
    nombreEstado(): string {
        return "RECHAZADO";
    }
    transicion(): string | null {
        return null;
    }
}