import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateCouncilGroupComponent } from './create-council-group.component';
import { AlertService } from '../../services/alert/alert.service';

describe('CreateCouncilGroupComponent', () => {
  let component: CreateCouncilGroupComponent;
  let fixture: ComponentFixture<CreateCouncilGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCouncilGroupComponent],
      imports: [
        HttpModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [ AlertService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCouncilGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
