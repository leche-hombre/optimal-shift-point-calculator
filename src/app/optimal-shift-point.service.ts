import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpeedTable } from './speed-table';
import { DefaultSpeedTable } from './default-speed-table';

@Injectable({
  providedIn: 'root'
})
export class OptimalShiftPointService {

  speedTable: BehaviorSubject<SpeedTable> = new BehaviorSubject(DefaultSpeedTable);

  constructor() { }

  updateSpeedTable(speedTable: SpeedTable) {
    this.speedTable.next(speedTable);
  }
}
