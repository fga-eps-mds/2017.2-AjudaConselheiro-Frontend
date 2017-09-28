export class CheckQuestion{
  public pergunta:string;

  constructor(pergunta:string){
    this.pergunta= pergunta;
  }
}
export class ConfirmComentary{
  constructor(public value:boolean,public identificador:string){}
}

export class SaveFormCheckOne{
  constructor(public answer:string,public questionSector:number,public questionNumber:number){}
}
export class SaveFormCheckTwo{
  constructor(public answer:boolean,public questionNumber:number){}
}
