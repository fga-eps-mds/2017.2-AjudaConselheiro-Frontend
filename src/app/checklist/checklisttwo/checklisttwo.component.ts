import { Component, OnInit } from '@angular/core';
import {CheckQuestion} from '../checklist.module'
@Component({
  selector: 'app-checklisttwo',
  templateUrl: './checklisttwo.component.html',
  styleUrls: ['./checklisttwo.component.css']
})
export class ChecklisttwoComponent implements OnInit {
  //This component is destined to the checklist corresponding to
  //AVALIAÇÃO DOS CARDÁPIOS DAS ESCOLAS PARQUE E ESCOLAS CLASSES DA CRE/PPC
  private checkTwo: CheckQuestion[]=[
    new CheckQuestion("Houve falta de alimentação escolar durante o período letivo? Caso positivo informe o(s) períodos e os produtos"),
    new CheckQuestion("A escola conseguiu dubstituir a preparação/produto que faltou por outra, para que não houvesse prejuízo aos alunos? Qual foi a substituição?"),
    //requer comentário caso sim
    new CheckQuestion("De maneira geral, os cardápios são bem elaborados"),
    new CheckQuestion("De maneira geral, os cardápios são bem aceitos pelos alunos?"),
    new CheckQuestion("Há excesso de algum gênero alimentício no cardápio? Qual(ais)?"),
    //requer comentário caso sim
    new CheckQuestion("O cardápio fica exposto para os alunos e comunidade?"),
    new CheckQuestion("A escola complementa a alimentação escolar? Como?"),
    //requer comentário
    new CheckQuestion("A quantidade de gêneros entregues nas escolas foi suficiente para ofertar refeições para todos os alunos até que se proceda à próxima distribuição?"),
    new CheckQuestion("A escola recebe doação de alimentos?"),
    new CheckQuestion("Qual a quantidade de frutas e hortaliças que estão sendo oferecidas por aluno, durante o período de uma semana?"),
//resposta em comentário para os 4 próximos itens
    new CheckQuestion("Qual a preparação mais aceita?"),
    new CheckQuestion("Qual a preparação menos aceita?"),
    new CheckQuestion("Qual produto é mais aceito?"),
    new CheckQuestion("Qual produto é menos aceito?"),
  ]




  constructor() { }

  ngOnInit() {
  }

}
