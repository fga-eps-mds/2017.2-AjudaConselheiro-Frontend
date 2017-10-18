import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthenticationService } from './../services/authentication/authentication.service';
import { HomeComponent } from './home.component';
import { NavbarHomeComponent } from '../layouts/navbar/navbar.component';
import { AlertService } from '../services/index';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        NavbarHomeComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      imports: [
        CarouselModule,
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        AuthenticationService,
        AlertService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navBar', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-navbar')).not.toBe(null);
  });

  it('should have a Carousel', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-carousel')).not.toBe(null);
  });

  // it('should know when the localStorage has not isLoggedIn property', () => {
  //   localStorage.removeItem('isLoggedIn');
  //   expect(fixture.componentInstance.hasToken()).toBeFalsy();
  // });

  // it('should know when the localStorage isLoggedIn property is truthy', () => {
  //   localStorage.setItem('isLoggedIn', 'true');
  //   expect(fixture.componentInstance.hasToken()).toBeTruthy();
  // });

  // it('should know when the localStorage isLoggedIn property is falsy', () => {
  //   localStorage.setItem('isLoggedIn', 'false');
  //   expect(fixture.componentInstance.hasToken()).toBeFalsy();
  // });
});
