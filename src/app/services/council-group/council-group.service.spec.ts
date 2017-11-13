import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Http, HttpModule, ConnectionBackend,
  ResponseOptions, Response, BaseRequestOptions,
  RequestOptions, Headers
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { CouncilGroupService } from './council-group.service';
import { AlertService } from '../alert/alert.service';
import { CouncilGroup } from '../../models/index';

describe('CouncilGroupService', () => {
  let fakeCouncil: CouncilGroup;
  fakeCouncil = new CouncilGroup;
  fakeCouncil.municipio = 'municipio';
  fakeCouncil.estado = 'estado';

  const fakeFormattedCouncil = {
    'codAplicativo': 462,
    'codGrupoPai': 1,
    'codObjeto': fakeCouncil.codObjeto,
    'codTipoObjeto': 1,
    'descricao': 'CAE-estado-municipio'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CouncilGroupService,
        AlertService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
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
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  // For testing service creation
  it('should be created', inject([CouncilGroupService], (service: CouncilGroupService) => {
    expect(service).toBeTruthy();
  }));


  // For getFormattedData()
  it('should format a valid council array',
    inject([CouncilGroupService], (service: CouncilGroupService) => {

    const formattedCouncil = service.getFormattedData(fakeCouncil);
    expect(formattedCouncil).toEqual(JSON.stringify(fakeFormattedCouncil));
  }));


  // For createCouncil()
  it('createCouncil() should create a valid council if there is valid data',
    inject([CouncilGroupService, MockBackend], (service, mockBackend) => {

    // Needed fake data
    const fakeData = JSON.stringify(fakeCouncil);
    const fakeHeader = new Headers({ location: 'fakeLocation' });
    localStorage.setItem('token', 'appToken');

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData, headers: fakeHeader });
      connection.mockRespond(new Response(options));
    });

    // Calling and testing the function
    service.createCouncil(fakeCouncil).subscribe((result) => {
      expect(result).toEqual('fakeLocation');
    });
  }));

  it('createCouncil() should return a empty Observable if user is not logged',
    inject([CouncilGroupService, MockBackend], (service, mockBackend) => {

    // Needed fake data
    const fakeData = JSON.stringify(fakeCouncil);
    const fakeHeader = new Headers({ location: 'fakeLocation' });

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData, headers: fakeHeader });
      connection.mockRespond(new Response(options));
    });

    // Calling and testing the function
    const fakeObservable = new Observable<any>();
    const response = service.createCouncil(fakeCouncil);
    expect(response).toEqual(fakeObservable);
  }));


  // for extractLocation()
  it('extractLocation() should return { } if Response header is null',
    inject([CouncilGroupService, MockBackend], (service, mockBackend) => {

    // Needed fake data
    const fakeData = JSON.stringify(fakeCouncil);
    const fakeHeader = new Headers({ location: null });
    localStorage.setItem('token', 'appToken');

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData, headers: fakeHeader });
      connection.mockRespond(new Response(options));
    });

    // Calling and testing the function
    service.createCouncil(fakeCouncil).subscribe((result) => {
      expect(result).toEqual({ });
    });
  }));


  // For getAjudaConselheiroCouncilGroups()
  it('getAjudaConselheiroCouncilGroups() should return a array of groups',
    inject([CouncilGroupService, MockBackend], (service, mockBackend) => {

    // Needed fake data
    const fakeArray = [
      {group: 1, name: 'cae-municipio-uf'},
      {group: 2, name: 'cae-municipio-uf2'}
    ];
    const fakeData = JSON.stringify(fakeArray);

    // Mocking HTTP connection for this test
    mockBackend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({ body: fakeData });
      connection.mockRespond(new Response(options));
    });

    // Calling and testing the function
    service.getAjudaConselheiroCouncilGroups('teste').subscribe((result) => {
      expect(result.length).toEqual(2);

      expect(result[0].group).toEqual(1);
      expect(result[0].name).toEqual('cae-municipio-uf');

      expect(result[1].group).toEqual(2);
      expect(result[1].name).toEqual('cae-municipio-uf2');
    });
  }));

});
