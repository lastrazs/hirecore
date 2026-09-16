import { Suscriptor } from "./Suscriptor";
import { Candidato } from "../core/Candidato.ts";

export class SuscriptorGerente implements Suscriptor {
    private emailGerente: string;

    constructor(email: string = "gerente@empresa.com") {
        this.emailGerente = email;
    }

    notificar(candidato: Candidato, nombreEstado: string): void {
        if (nombreEstado === "OFERTA" || nombreEstado === "CONTRATADO") {
            console.log(
                `[Gerente - ${this.emailGerente}] Notificación para ${candidato.nombre}: Estado ${nombreEstado}`
            );
        }
    }
}