import { SchedulingService } from './../../services/scheduling.service';
import { Scheduling } from './../../models/scheduling.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scheduling-home',
  templateUrl: './scheduling-home.component.html',
  styleUrls: ['./scheduling-home.component.css']
})
export class SchedulingHomeComponent implements OnInit {

  schedulings: Scheduling[];

  constructor(private schedulingService: SchedulingService) { }

  ngOnInit() {
    this.schedulings = this.listAllScheculings();
  }

  listAllScheculings(): Scheduling[] {
    return this.schedulingService.listAllScheculings();
  }

  deleteScheduling($event: any, scheduling: Scheduling): void {
    $event.preventDefault();
    if (confirm('Deseja remover este agendamento?')) {
    this.schedulingService.deleteScheduling(scheduling.id);
    this.schedulings = this.schedulingService.listAllScheculings();
    }
  }
}
