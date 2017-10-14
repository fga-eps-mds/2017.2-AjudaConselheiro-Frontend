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
});
