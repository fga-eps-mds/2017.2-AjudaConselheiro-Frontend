import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { UserService, AlertService, AuthenticationService } from '../../services/index';
import { User } from '../../models/index';
import { UserMasks } from '../userMasks';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService, AlertService],
})

export class UserEditComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;
  userName = '';
  password = '';
  maskcpf = UserMasks.MASK_CPF;
  maskphone = UserMasks.MASK_PHONE;
  selDelete = false;
  public name;
  public biography;
  public email;
  public phone;
  cod: number;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.userService.getLoggedUser();
    this.userName = this.getUserName();
    this.getAdditionalFields();
  }

  pressDelete() {
    this.selDelete = true;
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.warn('Aviso: Usuário já cadastrado ou desativado!');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  updateUser(): void {
    this.userService.updateUser(this.user)
      .subscribe(
        result => this.alertService.success('Seu perfil será atualizado no seu próximo login'),
        error => this.error(error)
      );
  }

  getAdditionalFields() {
    this.phone = this.userService.getAdditionalFields()
      .subscribe(
        result => this.user.telefone = this.phone = result['camposAdicionais'],
        error => this.alertService.error(error)
      );
  }

  validatePassword() {
    this.authenticationService.login(this.user.email, this.password)
      .subscribe(
        (result) => this.deleteUser(),
        (error) => this.validateError(error.status));
  }

  validateError(errorStatus: number) {
    console.log('error: ', errorStatus);
    if (errorStatus === 401) {
      this.alertService.warn('Aviso: senha incorreta!');
    }
  }

  resultDelete() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  deleteUser() {
    this.userService.delete(this.user.cod)
      .subscribe(
        result => this.resultDelete()
      );
  }

  updateAdditionalFields(telefone: number, segmento?: string) {
    this.userService.updateAdditionalFields(telefone)
      .subscribe(
        error => this.alertService.error(error)
      );
  }

  private getUserName() {
    const user = this.userService.getLoggedUser();

    // Checks if there's a user and if this user has a 'cod' attribute.
    if (user && 'nomeCompleto' in user) {
      return user.nomeCompleto;
    }

    return null;
  }
}
