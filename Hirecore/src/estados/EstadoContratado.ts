import { EstadoBase } from "./EstadoBase";

export class EstadoAplicado extends EstadoBase {
    nombreEstado(): string {
        return "CONTRATADO";
    }
    transicion(): string | null {
        return null;
    }
}