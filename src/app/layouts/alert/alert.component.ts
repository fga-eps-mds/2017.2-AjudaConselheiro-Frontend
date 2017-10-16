import { Component, OnInit } from '@angular/core';

import { Alert, AlertType } from '../../models/index';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
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
    if (!alert) {
      return;
    }
    switch (alert.type) {
      case AlertType.Success:
        return '#00C851';
      case AlertType.Error:
        return '#ff4444';
      case AlertType.Info:
        return '#33b5e5';
      case AlertType.Warning:
        return '#ffbb33';
    }
  }
}
