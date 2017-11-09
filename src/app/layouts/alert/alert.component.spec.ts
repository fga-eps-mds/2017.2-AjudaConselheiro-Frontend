import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AlertComponent } from './alert.component';
import { AlertService } from '../../services/alert/alert.service';
import { Alert, AlertType } from '../../models/index';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let fakeAlert: Alert;
  fakeAlert = new Alert();
  fakeAlert.type = AlertType.Success;
  fakeAlert.message = 'message';
  const subject = new Subject<Alert>();
  const mockAlert = {
    getAlert: jasmine.createSpy('getAlert')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      imports: [ RouterTestingModule ],
      providers: [AlertService, MockBackend ]
    })
    .compileComponents();

    const store = {};
    const mockLocalStorage = {
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      }
    };

    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

 fit('should remove alert', () => {
    localStorage.setItem('token', 'fakeToken');
    component.alerts = [fakeAlert];
    component.removeAlert(this.fakeAlert);
    expect(component.alerts.length).toEqual(0);
  });

  fit('should get alert color', () => {

    localStorage.setItem('token', 'fakeToken');

    let res;

    // Testing getAlertColor when success alert is passed
    res = component.getAlertColor(fakeAlert);
    expect(res).toBe('#DCECDB');

    // Testing getAlertColor when error alert is passed
    fakeAlert.type = AlertType.Error;
    res = component.getAlertColor(fakeAlert);
    expect(res).toBe('#FE9A9A');

    // Testing getAlertColor when info alert is passed
    fakeAlert.type = AlertType.Info;
    res = component.getAlertColor(fakeAlert);
    expect(res).toBe('#33B5E5');

    // Testing getAlertColor when warning alert is passed
    fakeAlert.type = AlertType.Warning;
    res = component.getAlertColor(fakeAlert);
    expect(res).toBe('#FFBB33');

    // Testing getAlertColor when invalid alert is passed
    res = component.getAlertColor(null);
    expect(res).toBeUndefined();

  });

  fit('should get alert font color', () => {

  localStorage.setItem('token', 'fakeToken');

    let res;

    // Testing getFonttColor when success alert is passed
    fakeAlert.type = AlertType.Success;
    res = component.getFontColor(fakeAlert);
    expect(res).toBe('#007E33');

    // Testing getFontColor when error alert is passed
    fakeAlert.type = AlertType.Error;
    res = component.getFontColor(fakeAlert);
    expect(res).toBe('#B71C1C');

    // Testing getFontColor when info alert is passed
    fakeAlert.type = AlertType.Info;
    res = component.getFontColor(fakeAlert);
    expect(res).toBe('#FFFFFF');

    // Testing getFontColor when warning alert is passed
    fakeAlert.type = AlertType.Warning;
    res = component.getFontColor(fakeAlert);
    expect(res).toBe('#FFFFFF');

    // Testing getFontColor when invalid alert is passed
    res = component.getFontColor(null);
    expect(res).toBeUndefined();

    });

    fit('should check other options', () => {
      localStorage.setItem('token', 'appToken');
      component.alerts = [fakeAlert];

      // Testing when have alert
      component.otherOptions(fakeAlert);
      component.removeAlert(fakeAlert);

       // Testing when haven't alert
      component.otherOptions(fakeAlert);

    });


    fit('should check other options', () => {
      localStorage.setItem('token', 'appToken');
      component.checkAlert(fakeAlert);
    });


});
