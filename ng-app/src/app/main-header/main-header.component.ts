import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'settings-dialog',
  template: `
    <label>Would you like dog pics every min???</label>
    <md-slide-toggle></md-slide-toggle>
  `
})
export class SettingsDialog {}

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  progress: number = 0;

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {
    // Update the value for the progress-bar on an interval.

  }

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }

  ngOnInit() {
    this.openDialog();
  }

}
