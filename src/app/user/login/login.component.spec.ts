import { async, ComponentFixture, TestBed,
  inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule, Http, ConnectionBackend,
  ResponseOptions, RequestOptions, Response,
  BaseRequestOptions, Headers } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { UserService, AlertService, ProfileService,
  AuthenticationService } from '../../services/index';

import { TextMaskModule } from 'angular2-text-mask';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        LoginComponent
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
        UserService,
        AlertService,
        ProfileService,
        AuthenticationService
      ]
    });

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // For componente instatiation
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // For login
  it('login() should call authenticationService.loginWithProfile with valid email',
    inject([MockBackend], (mockBackend) => {

    const authService = fixture.debugElement.injector.get(AuthenticationService);

    // Setting form value and update new changes
    component.email = 'email@abc.com';
    component.password = '1234567';
    fixture.detectChanges();

    const fakeUser = {cod: 1234, name: 'Teste'};

    const fakeHeader = new Headers({ appToken: 'fakeToken' });
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions(
        { body: JSON.stringify(fakeUser), headers: fakeHeader }
      );

      connection.mockRespond(new Response(options));
    });

    // Generating a fake Observable as response from service
    const fakeResOptions = new ResponseOptions({body: { }});
    const fakeRes = new Response(fakeResOptions);
    const spy = spyOn(authService, 'loginWithProfile').and.callThrough();

    // Call method and observe result
    component.login();
    expect(authService.loginWithProfile).toHaveBeenCalled();
  }));

  it('login() should warn if email is not valid',
    inject([AlertService], (service) => {
      const invalidEmail = 'email';
      component.email = invalidEmail;
      fixture.detectChanges();

      const spy = spyOn(service, 'warn').and.callThrough();

      component.login();

      expect(service.warn).toHaveBeenCalled();
  }));
});
