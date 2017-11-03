import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CouncilGroupCreateComponent } from './council-group-create.component';
import { AlertService } from '../../services/index';

describe('CouncilGroupCreateComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CouncilGroupCreateComponent],
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
