import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { ChecklistUpdateComponent } from './checklist-update.component';
import { UserService, AlertService, ProfileService, AuthenticationService} from '../../services/index';

describe('ChecklistoneComponent', () => {
  let component: ChecklistUpdateComponent;
  let fixture: ComponentFixture<ChecklistUpdateComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistUpdateComponent ],
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
    fixture = TestBed.createComponent(ChecklistUpdateComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have back button', () => {
    const backButton = compiled.querySelector('.backButton');
    expect(backButton).toBeTruthy();
  });

});
