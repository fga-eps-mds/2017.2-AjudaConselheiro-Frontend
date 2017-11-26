import {
  Http,
  HttpModule,
  ConnectionBackend,
  ResponseOptions,
  Response,
  BaseRequestOptions,
  RequestOptions,
  Headers
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { Scheduling } from '../../models/scheduling.model';

import {
  SchedulingService,
  AlertService,
  UserService,
  ProfileService,
  AuthenticationService
} from '../../services/index';

describe('SchedulingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      providers: [
        SchedulingService,
        AlertService,
        UserService,
        ProfileService,
        AuthenticationService
      ]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SchedulingService,
        AlertService,
        UserService,
        ProfileService,
        AuthenticationService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (
            mockBackend: MockBackend,
            defaultOptions: RequestOptions
          ) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [HttpModule, RouterTestingModule]
    });

    // This section till the end of the function is responsible for mocking
    // the needed localstorage functions, since the service uses them.
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
});

  it('should be created', inject([SchedulingService], (service: SchedulingService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'should do updating scheduling',
    inject([SchedulingService, MockBackend], (service, mockBackend) => {
      localStorage.setItem('token', 'appToken');
      const token = localStorage.getItem('token');
      const fakeData = JSON.stringify(new Scheduling());
      const fakeHeader = new Headers({
        'Content-Type': 'application/json',
        appToken: token
      });

      // Mocking HTTP connection for this test
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({ body: fakeData, headers: fakeHeader });
        connection.mockRespond(new Response(options));
      });

      // Calling and testing the function
      service.updateScheduling(new Scheduling(), 'Updating').subscribe(result => {
        expect(result).toBeDefined();
      });
    })
  );


  it(
    'should do get scheduling',
    inject([SchedulingService, MockBackend], (service, mockBackend) => {
      localStorage.setItem('token', 'appToken');

      const token = localStorage.getItem('token');
      const fakeHeader = new Headers({
        'Content-Type': 'application/json',
        appToken: token
      });

      // Mocking HTTP connection for this test
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const options = new ResponseOptions({ headers: fakeHeader });
        connection.mockRespond(new Response(options));
      });

      // Calling and testing the function
      service.getScheduling(  ).subscribe(result => {
        expect(result).toBeDefined();
      });
    })
  );

});
