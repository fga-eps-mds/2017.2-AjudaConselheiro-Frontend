import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ChecklistoneComponent } from './checklistone.component';
import { UserService, AlertService } from '../../services/index';

describe('ChecklistoneComponent', () => {
  let component: ChecklistoneComponent;
  let fixture: ComponentFixture<ChecklistoneComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistoneComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpModule, HttpClientModule ],
      providers: [
        UserService, AlertService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistoneComponent);
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
