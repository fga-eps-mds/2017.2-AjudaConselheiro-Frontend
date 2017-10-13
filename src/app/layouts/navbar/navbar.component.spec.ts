import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHomeComponent } from './navbar.component';

describe('NavbarHomeComponent', () => {
  let component: NavbarHomeComponent;
  let fixture: ComponentFixture<NavbarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarHomeComponent ]
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

  it('should have a navbar', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar')).not.toBe(null);
  });

  it('should have a navbar collapse', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-collapse')).not.toBe(null);
  });

  it('should have two navbar items', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.nav-item').length).toBe(2);
  });
});
