export class CheckQuestion{
  public pergunta:string;

  constructor(pergunta:string){
    this.pergunta= pergunta;
  }
}
export class ConfirmComentary{
  constructor(public value:boolean,public identificador:string){}
}

export class InfoData{
  constructor(public data:number,public responsavelPrenchimento:string,
    public responsavelInfo:string,public cargo:string,public escola:string,
    public cantineiro:string){}
}
