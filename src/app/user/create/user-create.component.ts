import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService, AlertService } from '../../services/index';
import { User } from '../../models/index';

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

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.user = new User();
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

  register(): void {
    if (this.matchPassword(this.user.confirmaSenha, this.user.senha)) {
      this.userService.createUser(this.user)
        .subscribe(
        result => {
          this.result();
        },
        error => {
          this.error(error.status);
        });
    }else {
      this.alertService.warn('Senhas não conferem!');
    }
  }
}

