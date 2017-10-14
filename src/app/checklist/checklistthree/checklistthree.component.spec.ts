import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecklistThreeService } from '../../services/index';
import { ChecklistthreeComponent } from './checklistthree.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ChecklistthreeComponent', () => {
  let component: ChecklistthreeComponent;
  let fixture: ComponentFixture<ChecklistthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistthreeComponent ],
      imports: [ FormsModule, RouterTestingModule ],
      providers: [ChecklistThreeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
