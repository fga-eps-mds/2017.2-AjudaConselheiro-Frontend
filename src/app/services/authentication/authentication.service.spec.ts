import {
  Http, HttpModule, ConnectionBackend,
  ResponseOptions, XHRBackend, Response,
  BaseRequestOptions, RequestOptions, RequestMethod
} from '@angular/http';
import { Headers } from '@angular/http';

import { TestBed, inject, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { AlertService, AuthenticationService } from '../../services/index';
import { Post } from '../../models/index';


describe('PostService', () => {
  const fakeUser = {
    nomeUsuario: 'Ziegler',
    nomeCompleto: 'Ziegler Top',
    cod: 234,
    email: 'abc@abc.com'
  };

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
        AuthenticationService
      ]
    });

    // Mocking localStorage
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

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  // For getPosts()
  it('should return a valid user if data are valid',
    inject([AuthenticationService, MockBackend], (authService, mockBackend) => {

      const fakeToken = 'FakeToken';
      const fakeHeader = new Headers({ appToken: fakeToken });
      const fakeData = JSON.stringify(fakeUser);

      const validFakeEmail = 'abc@abc.com';
      const validFakePassword = 'superS4f3passw0rd';

      // Mocking HTTP connection for this test
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({ body: fakeData, headers: fakeHeader });

        connection.mockRespond(new Response(options));
      });

      // Making the request
      authService.login(validFakeEmail, validFakePassword).subscribe((result) => {
        const responseToken = result[0];
        const responseBody = result[1];

        const userResponse = JSON.parse(responseBody._body);

        expect(responseToken).toEqual(fakeToken);
        expect(userResponse.cod).toEqual(fakeUser.cod);
        expect(userResponse.email).toEqual(validFakeEmail);
      });
    }));


  it('should do logout() if there is userData', inject([AuthenticationService], (service: AuthenticationService) => {

    // Mocking LocalStorage items
    localStorage.setItem('token', 'appToken');
    localStorage.setItem('userData', JSON.stringify(fakeUser));
    localStorage.setItem('isLoggedIn', 'true');

    // Making request for logout
    service.logout();

    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    expect(token).toBeNull();
    expect(userData).toBeNull();
    expect(isLoggedIn).toEqual('false');

  }));

});
