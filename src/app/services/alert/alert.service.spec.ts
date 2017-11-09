import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from './alert.service';
import { Alert, AlertType } from '../../models/index';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


describe('AlertService', () => {
  const fakeSubject = new Subject<Alert>();
  const FakeKeepAfterRouteChange = false;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService,
                  MockBackend],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));

  it('should do get alert', inject([AlertService], (service: AlertService) => {
    service.getAlert();
  }));

  it('should be clear', inject([AlertService], (service: AlertService) => {
    service.clear();
    expect(this.fakeSubject).toBeUndefined();
  }));
});
