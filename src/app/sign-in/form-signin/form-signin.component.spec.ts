import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSigninComponent } from './form-signin.component';

describe('FormSigninComponent', () => {
  let component: FormSigninComponent;
  let fixture: ComponentFixture<FormSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
