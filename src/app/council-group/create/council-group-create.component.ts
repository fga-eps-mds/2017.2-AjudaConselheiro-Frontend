import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CouncilGroup } from '../../models/index';
import { CouncilGroupService, AlertService } from '../../services/index';

@Component({
  selector: 'app-council-group-create',
  templateUrl: './council-group-create.component.html',
  styleUrls: ['./council-group-create.component.css'],
  providers: [CouncilGroupService]
})

export class CouncilGroupCreateComponent implements OnInit {

  @ViewChild('formCouncilGroupCreate') formCouncilGroupCreate: NgForm;
  councilGroup: CouncilGroup = null;
  private state = '';
  private city = '';

  constructor(
    public councilGroupService: CouncilGroupService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.councilGroup = new CouncilGroup();
  }

  createCouncilGroup(): void {
    this.councilGroupService.createCouncil(this.councilGroup)
      .subscribe(
        result => {
          this.councilGroup = result;
          this.alertService.success('SUCESSO');
          this.router.navigate(['/conselho/buscar']);
        },
        error => {
          this.alertService.error('Conselho já existente, redirecionando para seleção de conselhos');
          this.router.navigate(['/conselho/buscar']);
        });
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  // Listen IBGE state EventEmitter()
  chosenState(state: string) {
    state ? this.state = this.councilGroup.estado = state : this.alertService.warn('Nenhum estado selecionado');
    console.log('ESTADO COUNCIL GROUP:', this.state);
  }

  // Listen IBGE city EventEmitter()
  chosenCity(city: string) {
    city ? this.city = this.councilGroup.municipio = city : this.alertService.warn('Nenhuma cidade selecionada');
    console.log('CIDADE COUNCIL GROUP:', this.city);
  }

  // Has (state + city) assigned?
  hasLocation(): boolean {
    console.log('City: ', this.city);
    return !(!this.city || 0 === this.city.length);
  }
}
