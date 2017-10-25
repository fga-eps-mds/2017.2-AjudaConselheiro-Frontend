import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService, AlertService } from '../../services/index';
import { User } from '../../models/index';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService],
  moduleId: module.id,
})
export class CreateUserComponent implements OnInit {

  @ViewChild('formUser') formUser: NgForm;
  user: User;
  loading = false;

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
    }else {
      return false;
    }
  }

  register(): void {
    this.loading = true;
    if (!this.matchPassword(this.user.confirmaSenha, this.user.senha )) {
      this.alertService.warn('Senhas não conferem!');
    }else {
      this.userService.createUser(this.user)
      .subscribe(
      result => {
        this.alertService.success('Cadastro efetuado com sucesso! Faça seu login.');
        this.router.navigate(['/login']);
      },
      error => {
        console.log('error: ', error.status);
        if (error.status === 400) {
          this.alertService.warn('Aviso: Usuário já cadastrado ou desativado!');
        }else {
          this.alertService.error('Erro: falha na comunicação com o sistema!');
        }
        this.loading = false;
      });
    }
  }
}
