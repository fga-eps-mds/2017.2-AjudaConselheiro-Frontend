import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../../models/index';
import { HttpModule, Http, ConnectionBackend,
  ResponseOptions, RequestOptions, Response,
  BaseRequestOptions, Headers } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../alert/alert.service';
import { FormsModule } from '@angular/forms';
import { FakeUser } from '../../user/create/testing/fake-user';

import { UserService, AuthenticationService, ProfileService } from '../index';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        ConnectionBackend,
        AlertService,
        UserService,
        ProfileService,
        AuthenticationService
      ]
    });

    // This section till the end of the function is responsible for mocking
    // the needed localstorage functions, since the service uses them.
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  // Testing inject instantiation
  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));


  // For getUsers()
  it('should return data from getUsers()',
    inject([UserService, MockBackend], (service, mockBackend) => {
    const fakeUsers = [
      { name: 'Um', cod: 1},
      { name: 'Dois', cod: 2},
      { name: 'Três', cod: 3},
    ];

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeUsers });
        connection.mockRespond(new Response(options));
      });

      service.getUsers().subscribe((response) => {
        expect(response).toEqual(fakeUsers);
    });
  }));


  // For getUser(id)
  it('should return data from getUser(id)',
    inject([UserService, MockBackend], (service, mockBackend) => {

    const fakeUser = [
      { name: 'Um', cod: 1}
    ];

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeUser });
        connection.mockRespond(new Response(options));
    });

    // Making the request and testing its response
    service.getUser(fakeUser[0].cod).subscribe((response) => {
      expect(response).toEqual(fakeUser);
    });
  }));


  // For createUser()
  it('should create a user with profile in createUser()',
    inject([UserService, MockBackend], (service, mockBackend) => {

    const fakeUserParam = new FakeUser();

    const resHeader = new Headers();
    resHeader.append('location', 'http://mobile-aceite.tcu.gov.br/appCivicoRS/rest/pessoas/123');
    resHeader.append('appToken', 'FakeToken');

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeUserParam, headers: resHeader});
        connection.mockRespond(new Response(options));
    });

    // Making the request and testing its response
    service.createUser(fakeUserParam).subscribe((response) => {
      expect(response).toEqual(fakeUserParam);
    });
  }));

  it('createUser() should fail if location cod is wrong',
    inject([UserService, MockBackend], (service, mockBackend) => {

    const fakeUserParam = new FakeUser();

    const resHeader = new Headers();
    resHeader.append('location', 'http://mobile-aceite.tcu.gov.br/appCivicoRS/rest/pessoas/ERROR');
    resHeader.append('appToken', 'FakeToken');

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeUserParam, headers: resHeader});
        connection.mockRespond(new Response(options));
    });

    // Making the request and testing its response
    service.createUser(fakeUserParam).subscribe((response) => {
      expect(response).toBeNull();
    });
  }));


  // For getLoggedUser()
  it('getLoggedUser() should return a valid user object',
    inject([UserService], (service) => {

    // This sets a fake user that will be used
    const fakeUser = { name: 'Um', cod: 1};
    localStorage.setItem('userData', JSON.stringify(fakeUser));

    const returnUser = service.getLoggedUser();

    expect(returnUser).toBeTruthy();
    expect(returnUser).toEqual(fakeUser);
  }));

  it('getLoggedUser() should return nothing there isn\'t a logged user',
    inject([UserService], (service) => {
    const returnUser = service.getLoggedUser();

    expect(returnUser).toBeFalsy();
    expect(returnUser).toBeUndefined();
  }));


  // For getPerfilUser() - Should be getProfileUser()
  it('getPerfilUser() should return a valid user object',
    inject([UserService], (service) => {

    // This sets a fake user that will be used
    const fakeProfile = { CPF: '000.000.000-00' };
    localStorage.setItem('Profile', JSON.stringify(fakeProfile));

    const returnUser = service.getPerfilUser();

    expect(returnUser).toBeTruthy();
    expect(returnUser).toEqual(fakeProfile);
  }));

  it('getPerfilUser() should return nothing there isn\'t a profile',
    inject([UserService], (service) => {
    const returnUser = service.getPerfilUser();

    expect(returnUser).toBeFalsy();
    expect(returnUser).toBeUndefined();
  }));

  it('should return data from delete(id)',
  inject([UserService, MockBackend], (service, mockBackend) => {

  const fakeUser = [
    { name: 'Um', cod: 1}
  ];
  const resHeader = new Headers();
  localStorage.setItem('token','asdas');
  // Mocking HTTP connection for this test
  mockBackend.connections.subscribe((connection: MockConnection) => {
    const options = new ResponseOptions({ body: fakeUser});
      connection.mockRespond(new Response(options));
  });

  // Making the request and testing its response
  service.delete(fakeUser[0].cod).subscribe((response) => {
    expect(response.status).toEqual(null);
  });
}));

  it('has to return an updated user data',
    inject([UserService, MockBackend], (service, mockBackend) => {
      const userParams = new FakeUser();

      const resHeader = new Headers();
      resHeader.append('location', 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/0');
      resHeader.append('appToken', 'FakeToken');

      mockBackend.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({ body: userParams, headers: resHeader});
        connection.mockRespond(new Response(options));
      });

      service.updateUser(userParams).subscribe((response) => {
        expect(response).toEqual(userParams);
      });
  }));

  it('has to update user password',
    inject([UserService, MockBackend], (service, mockBackend) => {
      const userParams = new FakeUser();

      const resHeader = new Headers();
      resHeader.append('location', 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/0/definirNovaSenha');
      resHeader.append('appToken', 'FakeToken');
      resHeader.append('email', 'fakeMail');
      resHeader.append('senhaAtual', 'fakePass');
      resHeader.append('novaSenha', 'fakeNewPass');

      mockBackend.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({ headers: resHeader });
        connection.mockRespond(new Response(options));
      });

      service.updatePassword('fakePass', 'fakeNewPass').subscribe((response) => {
        expect(response).toBeDefined();
      });
  }));

  it('update user aditional fields ',
    inject([UserService, MockBackend], (service, mockBackend) => {
      const userParams = new FakeUser();
      const userPhone = 'phone';

      const resHeader = new Headers();
      resHeader.append('location', 'http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/0/perfil');
      resHeader.append('appToken', 'FakeToken');

      mockBackend.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({ headers: resHeader });
        connection.mockRespond(new Response(options));
      });

      service.updateAdditionalFields(userPhone).subscribe((response) => {
        expect(response).toBeDefined();
      });
  }));

  it(' ',
    inject([UserService, MockBackend], (service, mockBackend) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({ });
        connection.mockRespond(new Response(options));
      });

      service.getProfilePhoto().subscribe((response) => {
        expect(response).toBeDefined();
      });
  }));
});
