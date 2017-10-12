import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { NavbarHomeComponent } from '../layouts/navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        NavbarHomeComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        CarouselModule,
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        AuthenticationService
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
});
