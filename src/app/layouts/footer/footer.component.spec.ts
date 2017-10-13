import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a footer', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('footer')).not.toBe(null);
  });

  it('should have two container-fluid elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.container-fluid').length).toBe(2);
  });


  it('should have four titles', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.title').length).toBe(4);
  });


});
