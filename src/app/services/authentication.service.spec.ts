import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './authentication.service';


describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthenticationService ],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
