import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardControlCardsComponent } from './dashboard-control-cards.component';

describe('DashboardControlCardsComponent', () => {
  let component: DashboardControlCardsComponent;
  let fixture: ComponentFixture<DashboardControlCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardControlCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardControlCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
