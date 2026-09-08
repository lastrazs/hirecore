import "./estados/EstadosConcretos";
import { EstadoBase } from "./estados/EstadoBase";
import { Candidato } from "./core/Candidato";
import { Publicador } from "./suscriptores/Publicador";
import {
  SuscriptorReclutador,
  SuscriptorGerente,
  SuscriptorNomina,
  SuscriptorPortal
} from "./suscriptores/SuscriptoresConcretos";
import { GestorDeCandidato } from "./core/GestorDeCandidato";

console.log("=== INICIALIZANDO CONFIGURACIÓN DE OBSERVADORES ===");
const publicador = new Publicador();
publicador.agregarSuscriptor(new SuscriptorReclutador());
publicador.agregarSuscriptor(new SuscriptorGerente("gerente.tecnologia@empresa.com"));
publicador.agregarSuscriptor(new SuscriptorNomina("nomina@empresa.com"));
publicador.agregarSuscriptor(new SuscriptorPortal());

console.log("\n=== CREANDO CANDIDATO Y GESTOR ===");
const candidato = new Candidato("Carlos Gómez", "carlos@gmail.com", "reclutador@empresa.com", "APLICADO");
const estadoInicial = EstadoBase.obtenerEstado("APLICADO");
const gestor = new GestorDeCandidato(estadoInicial, candidato, publicador);

console.log(`Estado Inicial del Candidato: ${candidato.estado}`);

console.log("\n--- 1. AVANZAR: APLICADO -> ENTREVISTA ---");
gestor.avanzar("ana.reclutadora");

console.log("\n--- 2. AVANZAR: ENTREVISTA -> PRUEBA_TECNICA ---");
gestor.avanzar("ana.reclutadora");

console.log("\n--- 3. AVANZAR: PRUEBA_TECNICA -> OFERTA ---");
gestor.avanzar("lider.tecnico");

console.log("\n--- 4. RECHAZAR ACCIDENTALMENTE ---");
gestor.rechazar("ana.reclutadora");
console.log(`Estado actual tras rechazo: ${candidato.estado}`);

console.log("\n--- 5. DESHACER RECHAZO ---");
gestor.deshacerUltimo("ana.reclutadora");
console.log(`Estado actual tras deshacer: ${candidato.estado}`);

console.log("\n--- 6. AVANZAR: OFERTA -> VERIFICACION_REFERENCIAS ---");
gestor.avanzar("ana.reclutadora");

console.log("\n--- 7. AVANZAR: VERIFICACION_REFERENCIAS -> CONTRATADO ---");
gestor.avanzar("gerente.tecnologia");

console.log("\n=== CONSULTA DE HISTORIAL DE AUDITORÍA ===");
console.table(gestor.consultarHistorial());