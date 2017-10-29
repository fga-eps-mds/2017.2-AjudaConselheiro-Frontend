import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http, ConnectionBackend, ResponseOptions, XHRBackend, Response, } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { CouncilGroupService } from './council-group.service';
import { AlertService } from '../alert/alert.service';
import { CouncilGroup } from '../../models/index';


describe('CouncilGroupService', () => {
  let councilGroup: CouncilGroup;


  beforeEach(() => {
    councilGroup = new CouncilGroup;
    TestBed.configureTestingModule({
      providers: [CouncilGroupService, AlertService,{ provide: XHRBackend, useClass: MockBackend },],
      imports: [
        HttpModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([CouncilGroupService], (service: CouncilGroupService) => {
    expect(service).toBeTruthy();
  }));


  it('Test array info', inject([CouncilGroupService], (service: CouncilGroupService) => {
        councilGroup.municipio = 'nada';
        councilGroup.estado = 'otonda';
        const temp = service.getFormattedData(councilGroup);
        const teste = {
          'codAplicativo': 462,
          'codGrupoPai': 1,
          'codObjeto': councilGroup.codObjeto,
          'codTipoObjeto': 1,
          'descricao': 'CAE-nada-otonda'
        };
        expect(temp).toEqual(JSON.stringify(teste));
      }));
});
