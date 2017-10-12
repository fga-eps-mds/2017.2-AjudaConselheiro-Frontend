export class CheckQuestion {
  public pergunta: string;

  constructor(pergunta: string) {
    this.pergunta = pergunta;
  }
}
export class ConfirmComentary {
  constructor(public value: boolean, public identificador: string) {}
}
