import { TestBed } from '@angular/core/testing';

import { OptimalShiftPointService } from './optimal-shift-point.service';

describe('OptimalShiftPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptimalShiftPointService = TestBed.get(OptimalShiftPointService);
    expect(service).toBeTruthy();
  });
});
