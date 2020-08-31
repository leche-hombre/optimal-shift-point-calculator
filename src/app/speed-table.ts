import {GearRatio} from './gear-ratio';

export interface SpeedTable {
    gearRatio?: GearRatio[],
    rpm?: number[],
    tyreDiameter?: number,
    finalDriveRatio?: number
}