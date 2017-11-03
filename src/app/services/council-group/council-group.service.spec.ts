import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http, ConnectionBackend, ResponseOptions, XHRBackend, Response, } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { CouncilGroupCreateService } from './council-group.service';
import { AlertService } from '../alert/alert.service';
import { CouncilGroupCreate } from '../../models/index';


describe('CouncilGroupCreateService', () => {
  let councilGroupCreate: CouncilGroupCreate;


  beforeEach(() => {
    councilGroupCreate = new CouncilGroupCreate;
    TestBed.configureTestingModule({
      providers: [CouncilGroupCreateService, AlertService, { provide: XHRBackend, useClass: MockBackend }, ],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([CouncilGroupCreateService], (service: CouncilGroupCreateService) => {
    expect(service).toBeTruthy();
  }));


  it('Test array info', inject([CouncilGroupCreateService], (service: CouncilGroupCreateService) => {
        councilGroupCreate.municipio = 'nada';
        councilGroupCreate.estado = 'otonda';
        const temp = service.getFormattedData(councilGroupCreate);
        const teste = {
          'codAplicativo': 462,
          'codGrupoPai': 1,
          'codObjeto': councilGroupCreate.codObjeto,
          'codTipoObjeto': 1,
          'descricao': 'CAE-nada-otonda'
        };
        expect(temp).toEqual(JSON.stringify(teste));
      }));
});
