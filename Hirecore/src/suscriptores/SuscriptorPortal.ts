import { Suscriptor } from "./Suscriptor";
import { Candidato } from "../core/Candidato";

export class SuscriptorPortal implements Suscriptor {
    notificar(candidato: Candidato, nombreEstado: string): void {
        console.log(
            `[Portal] Actualización publicada: ${candidato.nombre} está en ${nombreEstado}`
        );
    }
}