import {  async, TestBed, ComponentFixture } from '@angular/core/testing';
import { SchoolService } from '../../services/index';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SchedulingService } from './../../services/scheduling.service';
import { MockBackend } from '@angular/http/testing';
import { CreateSchedulingComponent } from './create-scheduling.component';
import { Scheduling } from './../../models/scheduling.model';
import { Search } from './../../models/search.model';
import { FormsModule } from '@angular/forms';
import { Http, ConnectionBackend } from '@angular/http';
import { HttpModule } from '@angular/http';

describe('HomeComponent', () => {
  let component: CreateSchedulingComponent;
  let fixture: ComponentFixture<CreateSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateSchedulingComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        SchedulingService,
        SchoolService,
        Http,
        MockBackend,
        ConnectionBackend,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cityFilter should apply a regex on untreated string', () => {
    const city = {
      name: <string> 'BRASILIA',
      code: <string> '5300108'
    }
    const dataFromAPI = '"5300108:BRASILIA"';
    expect(component.cityFilter(dataFromAPI)).toEqual(city);
  });

  it('cityPush should push a filtered city into a array', () => {
    var dataFromAPI:string[];
    dataFromAPI = ['5300108:BRASILIA'];


    const city = {
      name: 'BRASILIA',
      code: <string> '5300108'
    }

    var cities = Array<Object>();
    cities.push(city);
    expect(component.cityPush(dataFromAPI)).toEqual(cities);
  });

  it('filterSchools should return a Array<Object>', () => {
    const school = {
      anoCenso:'2013',
      cidade:"BRASILIA",
      cod:'53012097',
      codCidade:'5300108',
      dependenciaAdministrativa:'2',
      dependenciaAdministrativaTxt:"Estadual",
      enemMediaGeral:'472.6940002441406',
      estado:"DF",
      idebAF:'2.9000000953674316',
      idebAI:'0',
      nome: "CED 123 DE SAMAMBAIA",
      regiao:"Centro-Oeste",
      situacaoFuncionamento:'1',
      situacaoFuncionamentoTxt:"Em atividade"
    }

    var schools = [];
    var afterTreatment = [];
    afterTreatment.push(school);
    schools.push(1);
    schools.push(school);
    expect(component.filterSchools(schools)).toEqual(afterTreatment[0]);

  });

});
