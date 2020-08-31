import { Component, OnInit } from '@angular/core';
import { OptimalShiftPointService } from '../optimal-shift-point.service';

@Component({
  selector: 'app-tyre-size',
  templateUrl: './tyre-size.component.html',
  styleUrls: ['./tyre-size.component.scss']
})
export class TyreSizeComponent implements OnInit {

  tyreWidth: number;
  tyreProfile: number;
  tyreRim: number;
  tyreDiameter: number;

  constructor(private optimalShiftPointService: OptimalShiftPointService) { }

  ngOnInit() {
  }

  calculateDiameter(): void {
    this.tyreDiameter = Number(((this.tyreWidth * this.tyreProfile / 2540 * 2) + (this.tyreRim * 1)).toFixed(1)); 
    const currentSpeedTable = this.optimalShiftPointService.speedTable.value;
    this.optimalShiftPointService.updateSpeedTable({...currentSpeedTable, ...{ tyreDiameter: this.tyreDiameter}});
  }

}
