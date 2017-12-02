import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';

import { UserService, AlertService, ProfileService } from '../../services/index';
import { User } from '../../models/index';
import { UserMasks } from '../userMasks';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UserService],
  moduleId: module.id,
})
export class UserCreateComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;
  data: string;

  maskcpf = UserMasks.MASK_CPF;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.user = new User();
    this.data = null;
  }

  matchPassword(confirmPassword: string, password: string): boolean {
    if (confirmPassword.match(password)) {
      return true;
    } else {
      return false;
    }
  }
  navigate() {
    this.router.navigate(['/login']);
  }

  result() {
    this.alertService.success('Cadastro efetuado com sucesso! Faça seu login.');
    this.navigate();
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.warn('Aviso: Usuário já cadastrado ou desativado!');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  register(cpf: string): void {
    if (this.matchPassword(this.user.confirmaSenha, this.user.senha) && this.testCPF(this.data) === true && this.data !== null) {
      this.userService.createUser(this.user, cpf)
        .subscribe(
        result => {
          this.result();
          this.savePosts(this.data);
        },
        error => {
          this.error(error.status);
        });
    }else if (( this.testCPF(this.data) === false || this.data === null)) {
      this.alertService.warn('CPF inválido/Digite um CPF válido')
    } else{
      this.alertService.warn('Senhas não conferem!');
    }
  }
  savePosts(strCPF: string) {

        if (this.testCPF(strCPF) === true) {
          const userData = this.userService.getLoggedUser();
          const userCod = userData.cod;

          this.profileService.setUserProfile(this.data, userCod, 243, localStorage.getItem('token'))
            .subscribe(
              result => console.log(result)
            );
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
      if (rest !== Number(strCPF.substring(9, 10))) {
      return false;
      }
    }

    calculateTwoCPF(strCPF: string, sum: any, rest: any) {
      sum = this.sumStringValues(strCPF, sum, 10);
      rest = (sum * 10) % 11;
      if ((rest === 10) || (rest === 11)) {
        rest = 0;
      }
      if (rest !== Number(strCPF.substring(10, 11))) {
      return false;
      }
    }

    sumStringValues(strCPF: string, sum: any, limite1: any): any {
      for (let i = 1; i <= limite1; i++) {
        sum += Number(strCPF.substring(i - 1, i)) * (limite1 + 2 - i);
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
