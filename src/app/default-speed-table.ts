import { SpeedTable } from './speed-table';

export const DefaultSpeedTable: SpeedTable = {

    gearRatio: [
        {
            gear: 1,
            ratio: 3.34
        },
        {
            gear: 2,
            ratio: 2.06
        },
        {
            gear: 3,
            ratio: 1.33
        },
        {
            gear: 4,
            ratio: 1
        },
        {
            gear: 5,
            ratio: 0.86
        },
        {
            gear: 6,
            ratio: 0.77
        }
    ],
    rpm: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000],
    tyreDiameter: 27.1,
    finalDriveRatio: 3.14
};