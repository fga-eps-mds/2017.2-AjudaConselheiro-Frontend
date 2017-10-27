import { TestBed, inject } from '@angular/core/testing';

import { AlertService } from '../../services/index';
import { PostService } from './post.service';
import { Http, HttpModule, ConnectionBackend } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule, RouterTestingModule
      ],
      providers: [PostService, Http, ConnectionBackend, AlertService]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
