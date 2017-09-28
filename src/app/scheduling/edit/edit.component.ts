import { Scheduling } from './../../models/scheduling.model';
import { SchedulingService } from './../../services/scheduling.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {


  @ViewChild('formScheduling') formScheduling: NgForm;
  scheduling: Scheduling;

  maskdate: any[] = [/[0-3]/, /[0-9]/ , ' /', /[0-1]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(private schedulingService: SchedulingService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.scheduling = this.schedulingService.searchSchedulingId(id);
  }
  update(): void {
    if (this.formScheduling.form.valid) {
      this.schedulingService.updateScheduling(this.scheduling);
      this.router.navigate(['/agendamento']);
       }
  }

}
