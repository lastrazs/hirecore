import { EstadoBase } from "./EstadoBase";

export class EstadoAplicado extends EstadoBase {
    nombreEstado(): string {
        return "APLICADO";
    }
    transicion(): string | null {
        return "ENTREVISTA";
    }
}