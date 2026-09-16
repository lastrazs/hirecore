import { Candidato } from "../core/Candidato";

export interface Suscriptor {
    notificar(candidato: Candidato, nombreEstado: string): void;
}