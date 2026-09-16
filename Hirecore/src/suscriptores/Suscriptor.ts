import { Candidato } from "../core/Candidato.ts";

export interface Suscriptor {
    notificar(candidato: Candidato, nombreEstado: string): void;
}