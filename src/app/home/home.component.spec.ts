import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NavbarHomeComponent } from '../layouts/navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

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
        CarouselModule
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
});
