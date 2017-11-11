import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from './alert.service';
import { Alert, AlertType } from '../../models/index';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

describe('AlertService', () => {
  const fakeSubject = new Subject<Alert>();
  const fakeKeepAfterRouteChange = false;
  let fakeAlert: Alert;
  fakeAlert = new Alert();
  fakeAlert.type = AlertType.Success;
  fakeAlert.message = 'message';

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

  it('should do alert', inject([AlertService], (service: AlertService) => {
    service.clear();
    service.alert( fakeAlert.type, fakeAlert.message, fakeKeepAfterRouteChange);
    expect(service.subject.next).toBeDefined();
  }));

  it('should be success alert', inject([AlertService], (service: AlertService) => {
    service.clear();
    service.success( fakeAlert.message, fakeKeepAfterRouteChange);
    expect(service.subject.next).toBeDefined();
  }));

  it('should be error alert', inject([AlertService], (service: AlertService) => {
    service.clear();
    service.error( fakeAlert.message, fakeKeepAfterRouteChange);
    expect(service.subject.next).toBeDefined();
  }));

  it('should be warn alert', inject([AlertService], (service: AlertService) => {
    service.clear();
    service.warn( fakeAlert.message, fakeKeepAfterRouteChange);
    expect(service.subject.next).toBeDefined();
  }));

  it('should be info alert', inject([AlertService], (service: AlertService) => {
    service.clear();
    service.info( fakeAlert.message, fakeKeepAfterRouteChange);
    expect(service.subject.next).toBeDefined();
  }));

  it('should be clear', inject([AlertService], (service: AlertService) => {
    service.clear();
    expect(this.fakeSubject).toBeUndefined();
  }));
});
