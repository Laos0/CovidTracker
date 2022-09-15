import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidLocalStatsComponent } from './covid-local-stats.component';

describe('CovidLocalStatsComponent', () => {
  let component: CovidLocalStatsComponent;
  let fixture: ComponentFixture<CovidLocalStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidLocalStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidLocalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
