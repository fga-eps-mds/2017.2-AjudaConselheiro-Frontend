import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../../models/index';
import { HttpModule, Http, ConnectionBackend, ResponseOptions, XHRBackend, Response, } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AlertService } from '../alert/alert.service';
import { FormsModule } from '@angular/forms';
import { FakeUser } from '../../user/create/testing/fake-user';

import { UserService, AuthenticationService, ProfileService } from '../index';

describe('UserService', () => {

  let user: User;
  const fakeUser: FakeUser = new FakeUser();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        AlertService,
        AuthenticationService,
        ProfileService,
        MockBackend,
        ConnectionBackend,
        { provide: XHRBackend, useClass: MockBackend }
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
    user = fakeUser.generateFakeUser();
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
