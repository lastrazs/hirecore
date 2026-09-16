import { Auditoria } from "../comandos/Auditoria";
import { Comando } from "../comandos/Comando";
import { Usuario } from "../comandos/Usuario";
import { Estado } from "../estados/Estado";
import { Publicador } from "../suscriptores/Publicador";
import { Candidato } from "./Candidato";

export class GestorDeCandidato {
  private auditoria: Auditoria;
  private ultimoComando: Comando | null = null;

  constructor(
    private estadoActual: Estado,
    private candidato: Candidato,
    private publicador: Publicador,
    auditoria?: Auditoria
  ) {
    this.auditoria = auditoria ?? new Auditoria();
  }

  avanzar(usuario: Usuario): void {
    this.estadoActual.actualizar(this, usuario);
  }

  rechazar(usuario: Usuario): void {
    this.estadoActual.rechazar(this, usuario);
  }

  deshacer(usuario: Usuario): void {
    if (!this.ultimoComando) {
      console.log("No hay nada que deshacer.");
      return;
    }

    const comando = this.ultimoComando;
    const estadoAnterior = comando.estadoAnterior;
    const estadoActualAntes = comando.estadoNuevo;

    this.estadoActual = estadoAnterior;
    this.candidato.estado = estadoAnterior.nombreEstado();

    const undo = new Comando(
      usuario,
      this.candidato,
      estadoActualAntes,
      estadoAnterior,
      new Date()
    );

    this.auditoria.registrar(undo);

    this.publicador.notificarSuscriptores(
    this.candidato,
    estadoAnterior.nombreEstado()
    );

    this.ultimoComando = null;

    console.log(
      `Undo realizado: ${this.candidato.nombre} vuelve a ${estadoAnterior.nombreEstado()}`
    );
  }

  actualizarEstado(nuevoEstado: Estado, usuario: Usuario): void {
    const estadoAnterior = this.estadoActual;

    this.estadoActual = nuevoEstado;
    this.candidato.estado = nuevoEstado.nombreEstado();

    const comando = new Comando(
      usuario,
      this.candidato,
      estadoAnterior,
      nuevoEstado,
      new Date()
    );

    this.auditoria.registrar(comando);
    this.ultimoComando = comando;

    this.publicador.notificarSuscriptores(this.candidato, nuevoEstado.nombreEstado());
  }

  consultarHistorial(): Comando[] {
    return this.auditoria.consultarRegistros();
  }

  obtenerEstadoActual(): Estado {
    return this.estadoActual;
  }
}