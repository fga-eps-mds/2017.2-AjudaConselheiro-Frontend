import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateCouncilGroupComponent } from './create-council-group.component';
import { AlertService } from '../../services/index';

describe('CreateCouncilGroupComponent', () => {

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
});
