import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './user.service';
import { User } from '../../models/index';
import { HttpModule, Http, ConnectionBackend, ResponseOptions, XHRBackend, Response, } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AlertService } from '../alert/alert.service';
import { FormsModule } from '@angular/forms';

describe('AlertService', () => {

  let user: User = new User();
  user = new User();
  user.nomeCompleto = 'Joao Pereira';
  user.nomeUsuario = 'Joao';
  user.CEP = '72000000';
  user.cod = 0;
  user.email = 'joao@angular.com';
  user.senha = '1234567';
  user.confirmaSenha = '1234567';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, AlertService, Http,
        { provide: XHRBackend, useClass: MockBackend },
        MockBackend,
        ConnectionBackend
      ],
      imports: [RouterTestingModule,
        FormsModule,
        HttpModule]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should create user', () => {
    inject([UserService, XHRBackend], (service: UserService, mockBacked: MockBackend) => {
      mockBacked.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: JSON.stringify(user)
          })
        ));
      });
         service
        .createUser(user)
        .subscribe(res => {
          expect(res.json()).toBe('Usuário cadastrado com sucesso');
        });
    });
  });
});
