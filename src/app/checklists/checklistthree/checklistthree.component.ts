import { Component, OnInit } from '@angular/core';
import {CheckQuestion} from '../checklist.model'
@Component({
  selector: 'app-checklistthree',
  templateUrl: './checklistthree.component.html',
  styleUrls: ['./checklistthree.component.css']
})
export class ChecklistthreeComponent implements OnInit {
//This component is destined to the checklist corresponding to
//ACOMPANHAMENTO DAS CANTINAS PARTICULARES
  private checkThree: CheckQuestion[]=[
    new CheckQuestion("O cantineiro tem conhecimento da Lei n.º5.146/2013? "),
    new CheckQuestion("O cantineiro tem conhecimento do Decreto n.º36.900/2015?"),
    new CheckQuestion("O cantineiro já recebeu a visita da vigilância sanitária para fiscalização?"),
    new CheckQuestion("Os funcionários possuem curso de boas práticas de manipulação de alimentos?"),
    new CheckQuestion("Os atestados de saúde ocupacional  estão em dia e de fácil acesso?"),
  ]

  constructor() { }

  ngOnInit() {
  }

}
