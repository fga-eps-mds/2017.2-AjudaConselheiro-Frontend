import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams, ResponseOptions } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService, IbgeService } from '../services/index';
import { State } from '../models/index';

import { IbgeComponent } from './ibge.component';

describe('IbgeComponent', () => {
  let component: IbgeComponent;
  let fixture: ComponentFixture<IbgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IbgeComponent],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule],
      providers: [
        AlertService,
        IbgeService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should ng OnChanges', () => {
    component.state = 'Df';
    component.ngOnChanges('Df');
    component.city = 'Brasília';
    component.ngOnChanges('Brasília');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cities result', () => {
    const fakeResult = [
      {
        'id': 11,
        'sigla': 'RO',
        'nome': 'Rondônia',
        'regiao': {
          'id': 1,
          'sigla': 'N',
          'nome': 'Norte'
        }
      },
      {
        'id': 12,
        'sigla': 'AC',
        'nome': 'Acre',
        'regiao': {
          'id': 1,
          'sigla': 'N',
          'nome': 'Norte'
        }
      },
      {
        'id': 13,
        'sigla': 'AM',
        'nome': 'Amazonas',
        'regiao': {
          'id': 1,
          'sigla': 'N',
          'nome': 'Norte'
        }
      }
    ];
    const service = fixture.debugElement.injector.get(IbgeService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const filterCityNameSpy = spyOn(service, 'filterCityName').and.returnValue(
      Observable.of(fakeRes)
    );

    fixture.detectChanges();

    // Calling the method
    component.getCitiesResult(fakeResult);

    expect(service.filterCityName).toHaveBeenCalled();

  });

  it('should get cities', () => {
    const service = fixture.debugElement.injector.get(IbgeService);

    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getCitiesSpy = spyOn(service, 'getCities').and.returnValue(
      Observable.of(fakeRes)
    );
    const getCitiesResultSpy = spyOn(component, 'getCitiesResult');

    fixture.detectChanges();

    // Calling the method
    component.getCities('12');

    expect(service.getCities).toHaveBeenCalled();
    expect(component.getCitiesResult).toHaveBeenCalled();


  });

  it('should get states erro', () => {
    const service = fixture.debugElement.injector.get(IbgeService);
    const serviceTwo = fixture.debugElement.injector.get(AlertService);


    const fakeResOptions = new ResponseOptions({ body: {} });
    const fakeRes = new Response(fakeResOptions);
    const getStatesSpy = spyOn(service, 'getStates').and.returnValue(
      Observable.throw(fakeRes)
    );
    const errorSpy = spyOn(serviceTwo, 'error');


    fixture.detectChanges();

    // Calling the method
    component.getStates();

    expect(serviceTwo.error).toHaveBeenCalled();

  });

});
