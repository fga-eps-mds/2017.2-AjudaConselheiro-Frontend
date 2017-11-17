import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { ChecklistProductionComponent } from './checklist-production.component';
import {
  UserService,
  AlertService,
  ProfileService,
  AuthenticationService
} from '../../services/index';

describe('ChecklistProductionComponent', () => {
  let component: ChecklistProductionComponent;
  let fixture: ComponentFixture<ChecklistProductionComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistProductionComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpModule ],
      providers: [
        UserService,
        AlertService,
        ProfileService,
        AuthenticationService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistProductionComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fail incorrect not rquired questions', () => {
      const invalidQuestionNumber = 4;
      const invalidTopicNumber = 5;
      const validQuestionNumber = 0;
      const validTopicNumber = 6;

      // First case
      expect(component.isNotRequiredQuestions(invalidTopicNumber, invalidQuestionNumber)).toBeFalsy();

      // Second case
      expect(component.isNotRequiredQuestions(invalidTopicNumber, validQuestionNumber)).toBeFalsy();

      // Third case
      expect(component.isNotRequiredQuestions(validTopicNumber, invalidQuestionNumber)).toBeFalsy();
  });

  it('should pass correct not rquired questions', () => {
    const validQuestionNumber = 0;
    const validTopicNumber = 6;

    // First case
    expect(component.isNotRequiredQuestions(validTopicNumber, validQuestionNumber)).toBeTruthy();
  });

  it('should have back button', () => {
    const backButton = compiled.querySelector('.backButton');
    expect(backButton).toBeTruthy();
  });
});
