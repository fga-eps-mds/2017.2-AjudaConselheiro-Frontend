import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';
import { ProfileService, AuthenticationService, UserService, AlertService } from '../../services/index';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      providers: [
        AuthenticationService,
        ProfileService,
        UserService,
        AlertService
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the user be logged out when logout() is called', () => {
    localStorage.setItem('token', 'newToken'); // Adding a generic token to the localStorage,
                                               // which means that user is logged in
    component.logout();
    expect(localStorage.getItem('loggedOut')).toBeFalsy();
  });

  it('should have a navbar', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar')).not.toBeNull();
  });

  it('should have a navbar collapse', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-collapse')).not.toBeNull();
  });

  it('should have two navbar items when user is not logged in', () => {
    component.logout();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-item').length).toBe(2);
  });

  it('should have one navbar items when user is logged in', () => {
    localStorage.setItem('token', 'newToken'); // Adding a generic token to the localStorage,which means that user is logged in
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-item').length).toBe(1);
  });

  it('should have a login button when user is not logged in', () => {
    component.logout();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-item')[0].innerText).toEqual('Entrar');
  });

  it('should have a sign up button when user is not logged in', () => {
    component.logout();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-item')[1].innerText).toEqual('Cadastrar');
  });

  it('should have a logout button when user is logged in', () => {
    localStorage.setItem('token', 'newToken'); // Adding a generic token to the localStorage,
                                               // which means that user is logged in
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.nav-item').innerText).toEqual('Sair');
  });

  it('should know when localStorage has a token', () => {
    localStorage.setItem('token', 'newToken'); // Adding a generic token to the localStorage,
                                               // which means that user is logged in
    expect(component.hasToken).toBeTruthy();
  });

  it('should know when localStorage hasnt a token', () => {
    fixture.componentInstance.logout();
    expect(component.hasToken).toBeTruthy();
  });

});
