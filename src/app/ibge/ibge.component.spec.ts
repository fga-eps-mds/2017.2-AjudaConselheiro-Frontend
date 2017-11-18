import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService, IbgeService } from '../services/index';
import { State } from '../models/index';

import { IbgeComponent } from './ibge.component';

describe('IbgeComponent', () => {
  let component: IbgeComponent;
  let fixture: ComponentFixture<IbgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbgeComponent ],
      imports: [
        FormsModule,
        HttpModule,
        RouterTestingModule ],
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

    component.getCitiesResult(fakeResult);
  });

  it('should get cities', () => {
    component.getCities('12');
  });

});
