import { User } from '../../../models/index';

export class FakeUser {

  public user: User;

  FakeUser() {}

  generateFakeUser(): User {

    this.user = new User();
    this.user.nomeCompleto = 'Joao Pereira';
    this.user.nomeUsuario = 'Joao';
    this.user.CEP = '72000000';
    this.user.cod = 0;
    this.user.email = 'joao@angular.com';
    this.user.senha = '1234567';
    this.user.confirmaSenha = '1234567';

    return this.user;
  }

}
