import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSignupComponent } from './navbar-signup.component';

describe('NavbarSignupComponent', () => {
  let component: NavbarSignupComponent;
  let fixture: ComponentFixture<NavbarSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
