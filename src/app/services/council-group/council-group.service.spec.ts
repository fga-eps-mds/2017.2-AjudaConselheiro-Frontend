import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CouncilGroupService } from './council-group.service';
import { AlertService } from '../alert/alert.service';

describe('CouncilGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouncilGroupService, AlertService],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([CouncilGroupService], (service: CouncilGroupService) => {
    expect(service).toBeTruthy();
  }));
});
