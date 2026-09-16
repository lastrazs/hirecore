import { Suscriptor } from "./Suscriptor";
import { Candidato } from "../core/Candidato";

export class Publicador {
    private suscriptores: Suscriptor[] = [];

    agregarSuscriptor(suscriptor: Suscriptor): void {
        this.suscriptores.push(suscriptor);
    }

    notificarSuscriptores(candidato: Candidato, estado: string): void {
        for (const suscriptor of this.suscriptores) {
            suscriptor.notificar(candidato, estado);
        }
    }
}