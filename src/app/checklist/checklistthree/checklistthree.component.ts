import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {CheckQuestion, SaveFormCheckTwo} from '../../models/checklist.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { ChecklistThreeService } from './../../services/checklistthree.service';
import { ChecklistThree } from './../../models/checklistthree.model';

@Component({
  selector: 'app-checklistthree',
  templateUrl: './checklistthree.component.html',
  styleUrls: ['./checklistthree.component.css']
})
export class ChecklistthreeComponent implements OnInit {
  checklist: ChecklistThree;
  @ViewChild('formChecklist') formChecklist: NgForm;

// This component is destined to the checklist corresponding to
// ACOMPANHAMENTO DAS CANTINAS PARTICULARES
  // @Input('checkThreeRef[i]') checkThreeRef=[]

  checkThree: CheckQuestion[]= [
    new CheckQuestion('O cantineiro tem conhecimento da Lei n.º5.146/2013?'),
    new CheckQuestion('O cantineiro tem conhecimento do Decreto n.º36.900/2015?'),
    new CheckQuestion('O cantineiro já recebeu a visita da vigilância sanitária para fiscalização?'),
    new CheckQuestion('Os funcionários possuem curso de boas práticas de manipulação de alimentos?'),
    new CheckQuestion('Os atestados de saúde ocupacional  estão em dia e de fácil acesso?'),
  ];
  /*newFormulario(formu:NgForm){
    const value = formu.value;
    const resposta = new SaveFormCheckTwo(value.checkThree[value.index].pergunta,value.index,);
    this.answer.push(resposta)
  }

  answer:SaveFormCheckTwo[]=[
    // new SaveFormCheckTwo(this.),
  ]
*/
  constructor(
    private checklistThree: ChecklistThreeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checklist = new ChecklistThree();
  }
  newFormulario(): void {
    if (this.formChecklist.form.valid) {
      this.checklistThree.newCheck(this.checklist);
      this.router.navigate(['/checklist']);
    }
  }
}
