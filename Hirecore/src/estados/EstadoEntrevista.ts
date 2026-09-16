import { EstadoBase } from "./EstadoBase";

export class EstadoAplicado extends EstadoBase {
    nombreEstado(): string {
        return "ENTREVISTA";
    }
    transicion(): string | null {
        return "PRUEBA_TECNICA";
    }
}