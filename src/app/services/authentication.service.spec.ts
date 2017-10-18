import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './authentication.service';


describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [AuthenticationService]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should delete token', inject([AuthenticationService], (service: AuthenticationService) => {
    localStorage.setItem('token', 'newToken');
    expect(localStorage.hasOwnProperty('token')).toBe(true);
    service.logout();
    expect(localStorage.hasOwnProperty('token')).toBe(false);
  }));
});
