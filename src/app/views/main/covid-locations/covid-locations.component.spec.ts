import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidLocationsComponent } from './covid-locations.component';

describe('CovidLocationsComponent', () => {
  let component: CovidLocationsComponent;
  let fixture: ComponentFixture<CovidLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
