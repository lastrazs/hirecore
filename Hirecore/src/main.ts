import { Usuario } from "./comandos/Usuario";
import { Candidato } from "./core/Candidato";
import { GestorDeCandidato } from "./core/GestorDeCandidato";
import { EstadoAplicado } from "./estados/EstadoAplicado";
import { EstadoBase } from "./estados/EstadoBase";
import { EstadoEntrevista } from "./estados/EstadoEntrevista";
import { EstadoPruebaTecnica } from "./estados/EstadoPruebaTecnica";
import { EstadoOferta } from "./estados/EstadoOferta";
import { EstadoVerificacionReferencias } from "./estados/EstadoVerificacionReferencias";
import { EstadoContratado } from "./estados/EstadoContratado";
import { EstadoRechazado } from "./estados/EstadoRechazado";
import { Publicador } from "./suscriptores/Publicador";
import { SuscriptorGerente } from "./suscriptores/SuscriptorGerente";
import { SuscriptorNomina } from "./suscriptores/SuscriptorNomina";
import { SuscriptorPortal } from "./suscriptores/SuscriptorPortal";
import { SuscriptorReclutador } from "./suscriptores/SuscriptorReclutador";

const publicador = new Publicador();
publicador.agregarSuscriptor(new SuscriptorReclutador());
publicador.agregarSuscriptor(new SuscriptorGerente("gerente@empresa.com"));
publicador.agregarSuscriptor(new SuscriptorNomina("nomina@empresa.com"));
publicador.agregarSuscriptor(new SuscriptorPortal());

const candidato = new Candidato(
  "Carlos Gómez",
  "carlos@gmail.com",
  "reclutador@empresa.com",
  "APLICADO"
);

const estados = [
  new EstadoAplicado(),
  new EstadoEntrevista(),
  new EstadoPruebaTecnica(),
  new EstadoOferta(),
  new EstadoVerificacionReferencias(),
  new EstadoContratado(),
  new EstadoRechazado()
];

EstadoBase.registrarEstados(estados);

const estadoInicial = EstadoBase.obtenerEstado("APLICADO");

if (!estadoInicial) {
  throw new Error("No se pudo registrar el estado inicial.");
}

const gestor = new GestorDeCandidato(
  estadoInicial,
  candidato,
  publicador
);
const usuario = new Usuario("Ana");

console.log("=== Flujo principal ===");
console.log("Estado inicial:", candidato.estado);

gestor.avanzar(usuario);
console.log("Después de avanzar:", candidato.estado);

gestor.avanzar(usuario);
console.log("Después de avanzar:", candidato.estado);

gestor.avanzar(usuario);
console.log("Después de avanzar:", candidato.estado);

console.log("\n=== Rechazo y undo ===");

gestor.rechazar(usuario);
console.log("Después de rechazar:", candidato.estado);

gestor.deshacer(usuario);
console.log("Después de deshacer:", candidato.estado);

gestor.deshacer(usuario);
console.log("Después del segundo undo:", candidato.estado);

console.log("\n=== Historial ===");
console.table(gestor.consultarHistorial());