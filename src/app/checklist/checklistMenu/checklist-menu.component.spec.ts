import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from './../../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistMenuComponent } from './checklist-menu.component';

describe('Checklist-menuComponent', () => {
  let component: ChecklistMenuComponent;
  let fixture: ComponentFixture<ChecklistMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      imports: [ AppModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Entering checklist', () => {
    const checklist = fixture.debugElement.nativeElement;
    expect(checklist.nativeElement).not.toBe(null);
  });
  it('should have a text area Question', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question')).not.toBe(null);
  });
  it('should have a text area Question1', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question1')).not.toBe(null);
  });
  it('should have a text area Question2', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question2')).not.toBe(null);
  });
  it('should have a text area Question3', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question3')).not.toBe(null);
  });
  it('should have a text area Question4', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question4')).not.toBe(null);
  });
  it('should have a text area Question5', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question5')).not.toBe(null);
  });
  it('should have a text area Question6', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question6')).not.toBe(null);
  });
  it('should have a text area Question7', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question7')).not.toBe(null);
  });
  it('should have a text area Question8', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question8')).not.toBe(null);
  });
  it('should have a text area Question9', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question9')).not.toBe(null);
  });
  it('should have a text area Question10', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question10')).not.toBe(null);
  });
  it('should have a text area Question11', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question11')).not.toBe(null);
  });
  it('should have a text area Question12', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question12')).not.toBe(null);
  });
  it('should have a text area Question13', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question13')).not.toBe(null);
  });
  it('should have a text area Question14', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question14')).not.toBe(null);
  });
  it('should have a text area Question15', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.question15')).not.toBe(null);
  });
  it('should have a text area for the first commentary', () => {
    component.checkComentary[0].value = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryOne')).not.toBe(null);
  });
  it('should have a text area for the second commentary', () => {
    component.checkComentary[1].value = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryTwo')).not.toBe(null);
  });
  it('should have a text area for the third commentary', () => {
    component.checkComentary[2].value = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryThree')).not.toBe(null);
  });
  it('should have a text area for the fourth commentary', () => {
    component.checkComentary[3].value = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryFour')).not.toBe(null);
  });
  it('should have a text area for the fifth commentary', () => {
    component.checkComentary[4].value = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryFive')).not.toBe(null);
  });
  it('should not have a text area for the first commentary', () => {
    component.checkComentary[0].value = null;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryOne')).toBe(null);
  });
  it('should not have a text area for the second commentary', () => {
    component.checkComentary[1].value = null;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryTwo')).toBe(null);
  });
  it('should not have a text area for the third commentary', () => {
    component.checkComentary[2].value = null;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryThree')).toBe(null);
  });
  it('should not have a text area for the fourth commentary', () => {
    component.checkComentary[3].value = null;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryFour')).toBe(null);
  });
  it('should not have a text area for the fifth commentary', () => {
    component.checkComentary[4].value = null;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.commentaryFive')).toBe(null);
  });
});
