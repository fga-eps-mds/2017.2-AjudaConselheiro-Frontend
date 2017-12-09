import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule, Http, ConnectionBackend, RequestOptions, ResponseOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import 'rxjs/add/observable/throw';


import { CouncilGroupDeleteComponent } from './delete.component';
import { CouncilGroupService, AlertService } from '../../services/index';
import { CouncilGroup } from '../../models/index';


describe('CouncilGroupDeleteComponent', () => {
  let component: CouncilGroupDeleteComponent;
  let fixture: ComponentFixture<CouncilGroupDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CouncilGroupDeleteComponent,
      ],
      providers: [
        CouncilGroupService,
        AlertService,
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
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
  }));

  beforeEach(() => {
    localStorage.setItem('token', 'sdas');
    fixture = TestBed.createComponent(CouncilGroupDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test array councils toBeDefined', () => {
    const service = fixture.debugElement.injector.get(CouncilGroupService);
    const fakeResOptions = new ResponseOptions({ body: { 'nada': 'teste' } });
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'getCouncilGroups').and.returnValue(
      Observable.of(fakeRes)
    );

    fixture.detectChanges();
    component.getAll();
    expect(component.councils).toBeDefined();
  });

  it('test array councils toBeDefined', () => {
    const alertService = fixture.debugElement.injector.get(AlertService);
    const service = fixture.debugElement.injector.get(CouncilGroupService);
    const fakeResOptions = new ResponseOptions({ status: 204 });
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'getCouncilGroups').and.returnValue(
      Observable.throw(204)
    );
    console.log(service.getCouncilGroups());
    const alertSpy = spyOn(alertService, 'warn');
    fixture.detectChanges();
    component.getAll();

    expect(alertService.warn).toHaveBeenCalledWith('Nenhum agendamento encontrada!');
  });

  it('test array councils toBeDefined', () => {
    const alertService = fixture.debugElement.injector.get(AlertService);
    const service = fixture.debugElement.injector.get(CouncilGroupService);
    const fakeResOptions = new ResponseOptions({ status: 204 });
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'getCouncilGroups').and.returnValue(
      Observable.throw(400)
    );
    console.log(service.getCouncilGroups());
    const alertSpy = spyOn(alertService, 'error');
    fixture.detectChanges();
    component.getAll();
    expect(alertService.error).toHaveBeenCalledWith('Erro de requisição!');
  });
  it('test array councils toBeDefined', () => {
    const alertService = fixture.debugElement.injector.get(AlertService);
    const service = fixture.debugElement.injector.get(CouncilGroupService);
    const fakeResOptions = new ResponseOptions({ status: 204 });
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'getCouncilGroups').and.returnValue(
      Observable.throw(500)
    );
    console.log(service.getCouncilGroups());
    const alertSpy = spyOn(alertService, 'error');
    fixture.detectChanges();
    component.getAll();
    expect(alertService.error).toHaveBeenCalledWith('Erro no servidor!');
  });
  it('test array councils toBeDefined', () => {
    localStorage.clear();
    const alertService = fixture.debugElement.injector.get(AlertService);
    const alertSpy = spyOn(alertService, 'warn');
    fixture.detectChanges();
    component.getAll();
    expect(alertService.warn).toHaveBeenCalledWith('Você precisa estar logado');
    localStorage.setItem('token', 'sdas');
  });
  it('test array councils toBeDefined', () => {
    const service = fixture.debugElement.injector.get(CouncilGroupService);
    const fakeResOptions = new ResponseOptions({ body: { 'nada': 'teste' } });
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'deleteCouncil').and.returnValue(
      Observable.of(fakeRes)
    );

    fixture.detectChanges();
    component.deleteCouncil(10);
    expect(component.councils).toBeDefined();
  });

  it('test array councils toBeDefined', () => {
    const alertService = fixture.debugElement.injector.get(AlertService);
    const service = fixture.debugElement.injector.get(CouncilGroupService);
    const fakeResOptions = new ResponseOptions({ status: 204 });
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'deleteCouncil').and.returnValue(
      Observable.throw(204)
    );
    console.log(service.getCouncilGroups());
    const alertSpy = spyOn(alertService, 'warn');
    fixture.detectChanges();
    component.deleteCouncil(10);
    
    expect(alertService.warn).toHaveBeenCalledWith('Nenhum agendamento encontrada!');
  });

  it('test array councils toBeDefined', () => {
    const alertService = fixture.debugElement.injector.get(AlertService);
    const service = fixture.debugElement.injector.get(CouncilGroupService);
    const fakeResOptions = new ResponseOptions({ status: 204 });
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'deleteCouncil').and.returnValue(
      Observable.throw(400)
    );
    console.log(service.getCouncilGroups());
    const alertSpy = spyOn(alertService, 'error');
    fixture.detectChanges();
    component.deleteCouncil(10);
    expect(alertService.error).toHaveBeenCalledWith('Erro de requisição!');
  });
  it('test array councils toBeDefined', () => {
    const alertService = fixture.debugElement.injector.get(AlertService);
    const service = fixture.debugElement.injector.get(CouncilGroupService);
    const fakeResOptions = new ResponseOptions({ status: 204 });
    const fakeRes = new Response(fakeResOptions);
    const loginSpy = spyOn(service, 'deleteCouncil').and.returnValue(
      Observable.throw(500)
    );
    console.log(service.getCouncilGroups());
    const alertSpy = spyOn(alertService, 'error');
    fixture.detectChanges();
    component.deleteCouncil(10);
    expect(alertService.error).toHaveBeenCalledWith('Erro no servidor!');
  });
});
