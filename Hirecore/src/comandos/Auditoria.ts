import { Comando } from "./Comando";

export class Auditoria {
  private registros: Comando[] = [];

  registrar(comando: Comando): void {
    this.registros.push(comando);
  }

  consultarRegistros(): Comando[] {
    return [...this.registros];
  }
}
