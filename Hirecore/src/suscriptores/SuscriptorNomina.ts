import { Suscriptor } from "./Suscriptor";
import { Candidato } from "../core/Candidato.ts";

export class SuscriptorNomina implements Suscriptor {
    private emailNomina: string;

    constructor(email: string = "nomina@empresa.com") {
        this.emailNomina = email;
    }

    notificar(candidato: Candidato, nombreEstado: string): void {
        if (nombreEstado === "CONTRATADO") {
            console.log(
                `[Nómina - ${this.emailNomina}] Procesar ingreso para ${candidato.nombre}`
            );
        }
    }
}