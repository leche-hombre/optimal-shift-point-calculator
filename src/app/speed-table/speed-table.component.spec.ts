import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedTableComponent } from './speed-table.component';

describe('SpeedTableComponent', () => {
  let component: SpeedTableComponent;
  let fixture: ComponentFixture<SpeedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
