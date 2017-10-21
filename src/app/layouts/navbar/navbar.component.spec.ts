import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { NavbarHomeComponent } from './navbar.component';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from '../../services/index';

describe('NavbarHomeComponent', () => {
  let component: NavbarHomeComponent;
  let fixture: ComponentFixture<NavbarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarHomeComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      providers: [
        AuthenticationService,
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
    fixture = TestBed.createComponent(NavbarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the user be logged out when logout() is called', () => {
    localStorage.setItem('token', 'newToken'); // Adding a generic token to the localStorage,
                                               // which means that user is logged in
    fixture.componentInstance.logout();
    expect(localStorage.getItem('isLoggedIn')).toBeTruthy();
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
    fixture.componentInstance.logout();
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
    fixture.componentInstance.logout();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-item')[0].innerText).toEqual('Entrar');
  });

  it('should have a sign up button when user is not logged in', () => {
    fixture.componentInstance.logout();
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
    expect(fixture.componentInstance.hasToken()).toBeTruthy();
  });

  it('should know when localStorage hasnt a token', () => {
    fixture.componentInstance.logout();
    expect(fixture.componentInstance.hasToken()).toBeFalsy();
  });

});
