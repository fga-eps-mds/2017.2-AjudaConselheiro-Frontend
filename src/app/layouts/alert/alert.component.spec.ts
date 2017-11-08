import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';

import { AlertComponent } from './alert.component';
import { AlertService } from '../../services/alert/alert.service';
import { Alert, AlertType } from '../../models/index';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  const fakeAlert = {
    typeAlert: AlertType.Success,
    message: 'message'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      imports: [ RouterTestingModule ],
      providers: [ AlertService, MockBackend ]
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove alert', () => {
    localStorage.setItem('token', 'fakeToken');
    component.removeAlert(this.fakeAlert);
  });

});
