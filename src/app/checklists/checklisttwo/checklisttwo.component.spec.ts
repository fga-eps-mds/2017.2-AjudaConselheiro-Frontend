import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklisttwoComponent } from './checklisttwo.component';

describe('ChecklisttwoComponent', () => {
  let component: ChecklisttwoComponent;
  let fixture: ComponentFixture<ChecklisttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklisttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklisttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
