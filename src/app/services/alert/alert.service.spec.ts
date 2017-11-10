import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService, AuthenticationService, UserService,
  ProfileService } from '../index';

describe('AlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlertService,
        UserService,
        ProfileService,
        AuthenticationService
      ],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
