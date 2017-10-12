import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CouncilGroupService } from './council-group.service';

describe('CouncilGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouncilGroupService],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([CouncilGroupService], (service: CouncilGroupService) => {
    expect(service).toBeTruthy();
  }));
});
