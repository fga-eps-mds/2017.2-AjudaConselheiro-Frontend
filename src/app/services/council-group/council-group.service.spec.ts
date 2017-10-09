import { TestBed, inject } from '@angular/core/testing';

import { CouncilGroupService } from './council-group.service';

describe('CouncilGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouncilGroupService]
    });
  });

  it('should be created', inject([CouncilGroupService], (service: CouncilGroupService) => {
    expect(service).toBeTruthy();
  }));
});
