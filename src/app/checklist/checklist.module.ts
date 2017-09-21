import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent} from './checklist.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        ChecklistComponent
    ],
    exports: [
        ChecklistComponent
    ]
})

export class ChecklistModule{}

export class CheckQuestion{
  public pergunta:string;

  constructor(pergunta:string){
    this.pergunta= pergunta;
  }
}

export class InfoData{
  constructor(public data:number,public responsavelPrenchimento:string,
    public responsavelInfo:string,public cargo:string,public escola:string,
    public cantineiro:string){}
}
