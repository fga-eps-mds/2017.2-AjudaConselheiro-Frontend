import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from '../../models/index';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  template: `
  <div *ngFor="let alert of alerts" class="alert" [style.background]="getAlertColor(alert)" [style.color]="getFontColor(alert)">
      {{alert.message}}
    <a class="close" (click)="removeAlert(alert)">&times;</a>
  </div>`,
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert()
      .subscribe((alert: Alert) => {
        if (!alert) {
          // clear alerts when an empty alert is received
          this.alerts = [];
          return;
        }
        if (this.alerts.length !== 0) {
          this.removeAlert(alert);
        }
        this.alerts.push(alert);
      });
  }

  removeAlert(alert: Alert) {
    this.alerts.pop();
  }

  getAlertColor(alert: Alert) {
    // check if alert exists
    if (!alert) {
      return;
    }
    switch (alert.type) {
      // light green
      case AlertType.Success:
        return '#DCECDB';
      // light red
      case AlertType.Error:
        return '#FE9A9A';
      // light blue
      case AlertType.Info:
        return '#33B5E5';
      // light orange
      case AlertType.Warning:
        return '#FFBB33';
    }
  }

  getFontColor(alert: Alert) {
    // check if alert exists
    if (!alert) {
      return;
    }
    switch (alert.type) {
      // green
      case AlertType.Success:
        return '#007E33';
      // red
      case AlertType.Error:
        return '#B71C1C';
      // white
      case AlertType.Info:
        return '#FFFFFF';
      // white
      case AlertType.Warning:
        return '#FFFFFF';
    }
  }
}
