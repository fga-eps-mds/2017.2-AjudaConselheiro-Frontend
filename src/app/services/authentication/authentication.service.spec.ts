import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './authentication.service';
import { AlertService } from '../alert/alert.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthenticationService, AlertService ],
      imports: [
        HttpModule,
        RouterTestingModule
     ]
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
