import { Component, OnInit } from '@angular/core';
import { SpeedTable } from '../speed-table';
import { DefaultSpeedTable } from '../default-speed-table';
import { OptimalShiftPointService } from '../optimal-shift-point.service';

@Component({
  selector: 'app-speed-table',
  templateUrl: './speed-table.component.html',
  styleUrls: ['./speed-table.component.scss']
})
export class SpeedTableComponent implements OnInit {

  speedTable: SpeedTable = DefaultSpeedTable;
  headers = [];
  rows = [];

  constructor(private optimalShiftPointService: OptimalShiftPointService) { 
    this.speedTable = this.optimalShiftPointService.speedTable.value;
  }

  ngOnInit() {
  }

  generateSpeedTable() {
    this.updateSpeedTable();
    this.headers = ['Gear', ...this.speedTable.rpm];
    const tableRows = [];

    this.speedTable.gearRatio.forEach((gr) => {
      const result = [gr.gear];

      this.speedTable.rpm.forEach((rpm) => {
        const currentSpeed = Math.round((60/63360) * (rpm * (this.speedTable.tyreDiameter / 2)) / (this.speedTable.finalDriveRatio * gr.gear));
        result.push(currentSpeed);
      });

      tableRows.push(result);
    });

    this.rows = tableRows;
  }

  updateSpeedTable() {
    this.speedTable = this.optimalShiftPointService.speedTable.value;
  }

}
