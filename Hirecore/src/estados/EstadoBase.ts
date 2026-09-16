import { Estado } from "./Estado";
import { GestorDeCandidato } from "../core/GestorDeCandidato";
import { Usuario } from "../comandos/Usuario";

export abstract class EstadoBase implements Estado {
    protected estados: Map<string, Estado> = new Map();

    abstract nombreEstado(): string;
    abstract transicion(): string | null;

    actualizar(gestor: GestorDeCandidato, usuario: Usuario): void {
        const siguiente = this.transicion();
        if (siguiente !== null) {
            const nuevoEstado = this.estados.get(siguiente);
            if (nuevoEstado) {
                gestor.actualizarEstado(nuevoEstado, usuario);
            }
        }
    }

    rechazar(gestor: GestorDeCandidato, usuario: Usuario): void {
        const rechazado = this.estados.get("RECHAZADO");
        if (rechazado) {
            gestor.actualizarEstado(rechazado, usuario);
        }
    }
}