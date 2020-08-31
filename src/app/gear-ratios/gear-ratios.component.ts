import { Component, OnInit } from '@angular/core';
import { OptimalShiftPointService } from '../optimal-shift-point.service';
import { GearRatio } from '../gear-ratio';
import { SpeedTable } from '../speed-table';
import {DefaultSpeedTable} from '../default-speed-table';

@Component({
  selector: 'app-gear-ratios',
  templateUrl: './gear-ratios.component.html',
  styleUrls: ['./gear-ratios.component.scss']
})
export class GearRatiosComponent implements OnInit {

  firstGearRatio: number;
  secondGearRatio: number;
  thirdGearRatio: number;
  fourthGearRatio: number;
  fifthGearRatio: number;
  sixthGearRatio: number;
  finalDriveRatio: number;

  constructor(private optimateShiftPointService: OptimalShiftPointService) { }

  ngOnInit() {
  }

  updateRatios() {
    const currentSpeedTable = this.optimateShiftPointService.speedTable.value;
    const latestSpeedTable: SpeedTable = {
      gearRatio: [
        {
          gear: 1,
          ratio: this.firstGearRatio
        },
        {
          gear: 2,
          ratio: this.secondGearRatio
        },
        {
          gear: 3,
          ratio: this.thirdGearRatio
        },
        {
          gear: 4,
          ratio: this.fourthGearRatio
        },
        {
          gear: 5,
          ratio: this.fifthGearRatio
        },
        {
          gear: 6,
          ratio: this.sixthGearRatio
        }
      ],
      finalDriveRatio: this.finalDriveRatio
    };
    console.log(`Latest speed table: ${JSON.stringify(latestSpeedTable)}`);
    this.optimateShiftPointService.updateSpeedTable({...currentSpeedTable, ...{
      gearRatio: latestSpeedTable.gearRatio,
      finalDriveRatio: latestSpeedTable.finalDriveRatio
    }});
  }

}
