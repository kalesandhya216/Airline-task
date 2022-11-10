import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinepassDashboardComponent } from './airlinepass-dashboard.component';

describe('AirlinepassDashboardComponent', () => {
  let component: AirlinepassDashboardComponent;
  let fixture: ComponentFixture<AirlinepassDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinepassDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlinepassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
