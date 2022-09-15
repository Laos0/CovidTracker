import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGlobalStatsComponent } from './covid-global-stats.component';

describe('CovidGlobalStatsComponent', () => {
  let component: CovidGlobalStatsComponent;
  let fixture: ComponentFixture<CovidGlobalStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidGlobalStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGlobalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
