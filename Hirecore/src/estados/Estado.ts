import { GestorDeCandidato } from "../core/GestorDeCandidato";
import { Usuario } from "../comandos/Usuario";

export interface Estado {
    nombreEstado(): string;
    transicion(): string | null;
    actualizar(gestor: GestorDeCandidato, usuario: Usuario): void;
    rechazar(gestor: GestorDeCandidato, usuario: Usuario): void;
}