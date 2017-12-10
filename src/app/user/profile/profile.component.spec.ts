import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, ConnectionBackend,
  ResponseOptions, RequestOptions, Response,
  BaseRequestOptions, Headers } from '@angular/http';

  import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { APP_BASE_HREF, Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AlertService, AuthenticationService, ProfileService,
  UserService } from '../../services/index';
import { ProfileComponent } from './profile.component';
import { FakeUser } from '../create/testing/fake-user';
import { User } from '../../models/index';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
        declarations: [
          ProfileComponent,
        ],
        imports: [
          HttpModule,
          FormsModule,
          RouterTestingModule
        ],
        providers: [
          AlertService,
          UserService,
          ProfileService,
          AuthenticationService
        ]
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
    const user = {nomeCompleto: 'teste', cod: 123, email: 'abc@abc.com', biografia: 'bio'};
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('token', 'fakeToken');

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testing component initialization
  it('onInit() should call userService.getLoggedUser() if there is a token', () => {
    const service = fixture.debugElement.injector.get(UserService);
    const getLoggedSpy = spyOn(service, 'getLoggedUser').and.callThrough();

    // Needs to create again the component
    component.ngOnInit();

    expect(service.getLoggedUser).toHaveBeenCalled();
  });

  it('onInit() should go to \'/\' if there is not a token', () => {
    location = TestBed.get(Location);
    localStorage.removeItem('token');

    // Needs to create again the component
    component.ngOnInit();

    expect(location.path()).toBe('');
  });


  // validatePassword()
  it('validatePassword() should call delete() if success', () => {
    const service = fixture.debugElement.injector.get(AuthenticationService);

    // Mocking the login response
    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'loginWithoutProfile').and.returnValue(
      Observable.of(fakeRes)
    );

    // Mocking delete()
    const deletSpy = spyOn(component, 'delete').and.returnValue({});

    // Setting form data
    component.passwordForm = '12345678';
    fixture.detectChanges();

    // Calling the method
    component.validatePassword();

    expect(component.delete).toHaveBeenCalled();
  });

  it('validatePassword() should call errorStatus() if error', () => {
    const service = fixture.debugElement.injector.get(AuthenticationService);

    // Mocking the login response
    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'loginWithoutProfile').and.returnValue(
      Observable.throw({status: 401})
    );

    // Mocking errorStatus
    const deletSpy = spyOn(component, 'errorStatus').and.returnValue({});

    // Setting form data
    component.passwordForm = '12345678';
    fixture.detectChanges();

    // Calling the method
    component.validatePassword();

    expect(component.errorStatus).toHaveBeenCalled();
  });


  // errorStatus()
  it('errorStatus() should call warn() if error is 401', () => {
    const service = fixture.debugElement.injector.get(AlertService);

    // Mocking errorStatus
    const deletSpy = spyOn(service, 'warn');

    // Calling the method
    component.errorStatus(401);

    expect(service.warn).toHaveBeenCalledWith('Aviso: senha errada!');
  });

  it('errorStatus() should call warn() if error different than 401', () => {
    const service = fixture.debugElement.injector.get(AlertService);

    // Mocking errorStatus
    const deletSpy = spyOn(service, 'error');

    // Calling the method
    component.errorStatus(402);

    expect(service.error).toHaveBeenCalledWith('Erro: Não foi possível deletar!');
  });

  it('resultDelete() should go to \'/\'', () => {
    location = TestBed.get(Location);
    component.resultDelete();
    expect(location.path()).toBe('');
    expect(localStorage.getItem('isLoggedIn')).toEqual('false');
  });

  it('delete() should call resultDelete() if success', () => {
    const service = fixture.debugElement.injector.get(UserService);

    // Mocking the login response
    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'delete').and.returnValue(
      Observable.of(fakeRes)
    );

    // Mocking delete()
    const deletSpy = spyOn(component, 'resultDelete').and.returnValue({});

    // Setting form data
    fixture.detectChanges();

    // Calling the method
    component.delete();

    expect(component.resultDelete).toHaveBeenCalled();
  });

  it('delete() should call errorStatus() if error', () => {
    const service = fixture.debugElement.injector.get(UserService);

    // Mocking the login response
    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'delete').and.returnValue(
      Observable.throw(fakeRes)
    );

    // Mocking delete()
    const deletSpy = spyOn(component, 'errorStatus').and.returnValue({});

    // Setting form data
    fixture.detectChanges();

    // Calling the method
    component.delete();

    expect(component.errorStatus).toHaveBeenCalled();
  });

});
