import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistoneComponent } from './checklistone.component';

describe('ChecklistoneComponent', () => {
  let component: ChecklistoneComponent;
  let fixture: ComponentFixture<ChecklistoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
