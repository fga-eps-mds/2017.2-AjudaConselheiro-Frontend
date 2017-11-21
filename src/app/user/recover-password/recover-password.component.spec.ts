import { async, ComponentFixture, TestBed,
  inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule, Http, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecoverPasswordComponent } from './recover-password.component';

import { UserService, AlertService, ProfileService,
  AuthenticationService } from '../../services/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('RecoverPasswordComponent', () => {
  let component: RecoverPasswordComponent;
  let fixture: ComponentFixture<RecoverPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        RecoverPasswordComponent
      ],
      providers: [
        UserService,
        AlertService,
        ProfileService,
        AuthenticationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // For componente instatiation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // For recoverPassword()
  it('recoverPassword() should call sendNewPassword with valid email',
    inject([UserService], (service) => {

    // Setting form value and update new changes
    component.form.setValue({
      email: 'email@abc.com',
    });
    fixture.detectChanges();

    // Generating a fake Observable as response from service
    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const spy = spyOn(service, 'sendNewPassword').and.returnValue(
      // Generates a valid response for the service
      Observable.of(fakeRes)
    );

    // Call method and observe result
    component.recoverPassword();
    expect(service.sendNewPassword).toHaveBeenCalled();

  }));

  it('recoverPassword() should handle sendNewPassword errors',
    inject([UserService], (service) => {

    component.form.setValue({
      email: 'email@abc.com',
    });
    fixture.detectChanges();

    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const spy = spyOn(service, 'sendNewPassword').and.returnValue(
      Observable.throw(fakeRes)
    );

    component.recoverPassword();
    expect(service.sendNewPassword).toHaveBeenCalled();

  }));

  it('recoverPassword() should reset forms on sucess',
    inject([UserService], (service) => {

    component.form.setValue({
      email: 'email@abc.com',
    });
    fixture.detectChanges();


    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const spyService = spyOn(service, 'sendNewPassword').and.returnValue(
      Observable.of(fakeRes)
    );

    // Creates a reset() spy and update changes
    const spyForm = spyOn(component.form, 'reset').and.callThrough();
    component.recoverPassword();
    fixture.detectChanges();

    expect(component.form.reset).toHaveBeenCalled();

    const emailValue = component.form.get('email') as any;
    expect(emailValue._value).toBeNull();

  }));

  it('recoverPassword() should reset forms on fail',
    inject([UserService], (service) => {

    component.form.setValue({
      email: 'email@abc.com',
    });
    fixture.detectChanges();

    const fakeResOptions = new ResponseOptions({body: {}});
    const fakeRes = new Response(fakeResOptions);
    const spyService = spyOn(service, 'sendNewPassword').and.returnValue(
      Observable.throw(fakeRes)
    );

    const spyForm = spyOn(component.form, 'reset').and.callThrough();
    component.recoverPassword();
    fixture.detectChanges();
    expect(component.form.reset).toHaveBeenCalled();

    const emailValue = component.form.get('email') as any;
    expect(emailValue._value).toBeNull();
  }));
});
