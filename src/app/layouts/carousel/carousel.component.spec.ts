import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CarouselComponent } from './carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        CarouselModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a carousel', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('carousel')).not.toBe(null);
  });

  it('should have three slides', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('slide').length).toBe(3);
  });

  it('should have three images', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('img').length).toBe(3);
  });
});
