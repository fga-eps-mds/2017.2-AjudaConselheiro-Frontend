import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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

export class UserEditComponent implements OnInit, OnDestroy {

  @ViewChild('formUser') formUser: NgForm;
  user: User;
  userName = '';
  password = '';
  maskcpf = UserMasks.MASK_CPF;
  maskphone = UserMasks.MASK_PHONE;
  selDelete = false;
  updateSubs: Subscription;
  deleteSubs: Subscription;
  authenticateSubs: Subscription;
  updateAddSubs: Subscription;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.user = this.userService.getLoggedUser();
    this.userName = this.getUserName();
  }

  ngOnDestroy() {
    this.authenticateSubs.unsubscribe();
    this.deleteSubs.unsubscribe();
    this.updateAddSubs.unsubscribe();
    this.updateSubs.unsubscribe();
  }

  pressDelete() {
    this.selDelete = true;
  }

  result() {
    this.alertService.success('Usuário atualizado com sucesso! Faça seu login.');
  }

  error(status: any) {
    if (status === 400) {
      this.alertService.warn('Aviso: Usuário já cadastrado ou desativado!');
    } else {
      this.alertService.error('Erro: falha na comunicação com o sistema!');
    }
  }

  updateUser(): void {
    this.updateSubs = this.userService.updateUser(this.user)
      .subscribe(
        result => {
          this.result();
          this.router.navigate(['/perfil']);
          this.alertService.success('Seu perfil será atualizado no seu próximo login');
        },
        error => {
          this.error(error.status);
        });
  }

  validatePassword() {
    this.authenticateSubs = this.authenticationService.login(this.user.email, this.password)
      .subscribe(
        (result) => this.delete(),
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

  delete() {
    this.deleteSubs = this.userService.delete(this.user.cod)
      .subscribe(
        result => this.resultDelete()
    );
  }

  updateAdditionalFields(telefone: number, segmento?: string) {
    this.updateAddSubs = this.userService.updateAdditionalFields(telefone, segmento)
      .subscribe(
        result => {
          this.result();
        },
        error => {
          this.error(error.status);
        });
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
