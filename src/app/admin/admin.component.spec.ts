import { RouterTestingModule } from '@angular/router/testing';
import { ProfileService } from './../services/profile/profile.service';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from './../services/alert/alert.service';
import { AuthenticationService } from './../services/authentication/authentication.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { UserService } from './../services/user/user.service';
import {
  Http, HttpModule, ConnectionBackend,
  ResponseOptions, Response, BaseRequestOptions,
  RequestOptions, Headers
} from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let mockAlert;

  beforeEach(async(() => {
    mockAlert = {
      success: jasmine.createSpy('success'),
      warn: jasmine.createSpy('warn'),
      error: jasmine.createSpy('error')
  };
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [FormsModule, HttpModule, RouterTestingModule],
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
        AuthenticationService,
        ProfileService,
        AlertService,
        {
          provide: AlertService,
          useValue: mockAlert
       }  ]
    })
    .compileComponents();

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
    localStorage.clear();
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test isAdmin()', () => {
    localStorage.setItem('isLoggedIn', 'true');
    const body = {
      'camposAdicionais': 'nada',
      'tipoPerfil': {
        'codTipoPerfil': 249,
      }
    };

    localStorage.setItem('Profile', JSON.stringify(body));
    expect(component.isAdmin()).toBeTruthy();
  });

  it('test result() should call alertService.succes()', () => {
    component.result();
    expect(mockAlert.success).toHaveBeenCalledWith('Cadastro efetuado com sucesso!');
  });

  it('error() should call alertService.warn()and alertService.error', () => {
    component.error(400);
    expect(mockAlert.warn).toHaveBeenCalledWith('Aviso: Usuário já cadastrado ou desativado!');
    component.error(0);
    expect(mockAlert.error).toHaveBeenCalledWith('Erro: falha na comunicação com o sistema!');
  });

  it('register() should call createProfile() and result() if success', () => {
  const service = fixture.debugElement.injector.get(UserService);

  const fakeResOptions = new ResponseOptions({body: {}});
  const fakeRes = new Response(fakeResOptions);
  const spy = spyOn(service, 'createUser').and.returnValue(
    Observable.of(fakeRes)
  );

  const createSpy = spyOn(component, 'createProfile');
  const resulSpy = spyOn(component, 'result');

  component.register();
  expect(component.createProfile).toHaveBeenCalled();
  expect(component.result).toHaveBeenCalled();

  });

  it('register() should call error() if error', () => {
    const service = fixture.debugElement.injector.get(UserService);

    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const spy = spyOn(service, 'createUser').and.returnValue(
      Observable.throw(fakeRes)
    );

    const errorSpy = spyOn(component, 'error');

    component.register();
    expect(component.error).toHaveBeenCalled();
    });

    it('creteProfile() should call profileService and set token in localStorage',
      inject([AuthenticationService, MockBackend], (authService, mockBackend) => {
        const fakeToken = 'fakeToken';
        const fakeHeader = new Headers({appToken: fakeToken});
        const fakeData = JSON.stringify({name: 123});

        // Mocking HTTP connection for this test
        mockBackend.connections.subscribe((connection: MockConnection) => {
          const options = new ResponseOptions({ body: fakeData, headers: fakeHeader});

          connection.mockRespond(new Response(options));
        });

        const pService = fixture.debugElement.injector.get(ProfileService);
        const pSpy = spyOn(pService, 'setUserProfile').and.returnValue(
          Observable.of({})
        );

        component.token = fakeToken;
        fixture.detectChanges();
        component.createProfile();

        const localToken = localStorage.getItem('token');
        expect(pService.setUserProfile).toHaveBeenCalled();
        expect(localToken).toEqual(fakeToken);
    }));


});
