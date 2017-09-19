import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklistone',
  templateUrl: './checklistone.component.html',
  styleUrls: ['./checklistone.component.css']
})
export class ChecklistoneComponent implements OnInit {
  setComment1 = false;
  setComment2 = false;
  setComment3 = false;
  setComment4 = false;
  setComment5 = false;
  setComment6 = false;
  setComment7 = false;
  setComment8 = false;

  constructor() { }

  ngOnInit() {
  }
  CheckObservationTrue1(){
      this.setComment1 = true;
  }
  CheckObservationTrue2(){
      this.setComment2 = true;
  }
  CheckObservationTrue3(){
      this.setComment3 = true;
  }
  CheckObservationTrue4(){
      this.setComment4 = true;
  }
  CheckObservationTrue5(){
      this.setComment5 = true;
  }
  CheckObservationTrue6(){
      this.setComment6 = true;
  }
  CheckObservationTrue7(){
      this.setComment7 = true;
  }
  CheckObservationTrue8(){
      this.setComment8 = true;
  }
  CheckObservationFalse1(){
    this.setComment1 = false;
  }
  CheckObservationFalse2(){
    this.setComment2 = false;
  }
  CheckObservationFalse3(){
    this.setComment3 = false;
  }
  CheckObservationFalse4(){
    this.setComment4 = false;
  }
  CheckObservationFalse5(){
    this.setComment5 = false;
  }
  CheckObservationFalse6(){
    this.setComment6 = false;
  }
  CheckObservationFalse7(){
    this.setComment7 = false;
  }
  CheckObservationFalse8(){
    this.setComment8 = false;
  }
}
