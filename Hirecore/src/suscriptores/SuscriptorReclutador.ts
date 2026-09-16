import { Suscriptor } from "./Suscriptor";
import { Candidato } from "../core/Candidato";

export class SuscriptorReclutador implements Suscriptor {
    notificar(candidato: Candidato, nombreEstado: string): void {
        console.log(
            `[Reclutador] Notificado: ${candidato.nombre} ha pasado a ${nombreEstado}`
        );
    }
}