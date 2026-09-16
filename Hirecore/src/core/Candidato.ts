export class Candidato {
  constructor(
    public readonly nombre: string,
    public readonly email: string,
    public readonly reclutador: string,
    public estado: string
  ) {}
}