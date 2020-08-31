import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearRatiosComponent } from './gear-ratios.component';

describe('GearRatiosComponent', () => {
  let component: GearRatiosComponent;
  let fixture: ComponentFixture<GearRatiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearRatiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearRatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
