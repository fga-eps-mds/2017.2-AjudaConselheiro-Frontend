import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

import { ChecklistService } from './checklist.service';

describe('ChecklistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChecklistService],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([ChecklistService], (service: ChecklistService) => {
    expect(service).toBeTruthy();
  }));
});
