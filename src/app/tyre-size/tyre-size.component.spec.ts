import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TyreSizeComponent } from './tyre-size.component';

describe('TyreSizeComponent', () => {
  let component: TyreSizeComponent;
  let fixture: ComponentFixture<TyreSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyreSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyreSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
