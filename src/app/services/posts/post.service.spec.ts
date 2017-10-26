import { TestBed, inject } from '@angular/core/testing';

import { PostService } from './post.service';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';


describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [PostService, Http, ConnectionBackend]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
