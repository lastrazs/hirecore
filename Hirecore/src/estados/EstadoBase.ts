import { Estado } from "./Estado";
import { GestorDeCandidato } from "../core/GestorDeCandidato";
import { Usuario } from "../comandos/Usuario";

export abstract class EstadoBase implements Estado {
  protected static readonly registroEstados = new Map<string, Estado>();

  static registrarEstados(estados: Estado[]): void {
    for (const estado of estados) {
      EstadoBase.registroEstados.set(estado.nombreEstado(), estado);
    }
  }

  static obtenerEstado(nombre: string): Estado | undefined {
    return EstadoBase.registroEstados.get(nombre);
  }

  abstract nombreEstado(): string;
  abstract transicion(): string | null;

  actualizar(gestor: GestorDeCandidato, usuario: Usuario): void {
    const siguiente = this.transicion();

    if (siguiente === null) {
      return;
    }

    const nuevoEstado = EstadoBase.obtenerEstado(siguiente);

    if (nuevoEstado) {
      gestor.actualizarEstado(nuevoEstado, usuario);
    }
  }

  rechazar(gestor: GestorDeCandidato, usuario: Usuario): void {
    if (this.transicion() === null) {
      return;
    }

    const rechazado = EstadoBase.obtenerEstado("RECHAZADO");

    if (rechazado) {
      gestor.actualizarEstado(rechazado, usuario);
    }
  }
}