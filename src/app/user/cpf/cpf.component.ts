import { ProfileService } from './../../services/profile/profile.service';
import { AlertService } from './../../services/alert/alert.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css'],
  providers: [UserService]
})
export class UserCpfComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  data: string;
  constructor(
    private UserService: UserService,
    private alertService: AlertService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.data = null;
  }

  savePosts(strCPF: string) {

    if (this.testCPF(strCPF) === true) {
      const userData = this.UserService.getLoggedUser();
      const userCod = userData.cod;

      this.profileService.setUserProfile(this.data, userCod)
        .subscribe(
          result => console.log(result)
        );
  }
    if (strCPF === null) {
      this.alertService.warn('Digite seu CPF');
    } else if (this.testCPF(strCPF) === false) {
      this.alertService.error('CPF inválido/Digite um CPF válido');
    } else {
      this.alertService.success('CPF válido');
    }
  }

 expectedCPF(strCPF: string) {
  let soma = '00000000000';
  for (let i = 0 ; i <= 9 ; i++) {
    if (strCPF === soma) {
      return false;
    }
    soma = String(11111111111 + parseInt( soma, 10));
  }
  if (strCPF === null) {
    return false;
  }
 }
 calculateCPF(strCPF: string, sum: any, rest: any) {
  sum = this.sumStringValues(strCPF, sum, 9);
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }
  if (rest !== parseInt(strCPF.substring(9, 10))) {
  return false;
  }
}

calculateTwoCPF(strCPF: string, sum: any, rest: any) {
  sum = this.sumStringValues(strCPF, sum, 10);
  rest = (sum * 10) % 11;
  if ((rest === 10) || (rest === 11)) {
    rest = 0;
  }
  if (rest !== parseInt(strCPF.substring(10, 11))) {
  return false;
  }
}

sumStringValues(strCPF: string, sum: any, limite1: any): any {
  for (let i = 1; i <= limite1; i++) {
    sum += parseInt(strCPF.substring(i -1, i)) * (limite1 + 2 - i);
  }
  return sum;
}

testCPF(strCPF: string) {
    let sum;
    let rest;
    sum = 0;
    rest = 0;
    if (this.expectedCPF(strCPF) === false || this.calculateCPF(strCPF, sum, rest) === false ||
     this.calculateTwoCPF(strCPF, sum, rest)) {
       return false;
      }
    return true;
  }
}
