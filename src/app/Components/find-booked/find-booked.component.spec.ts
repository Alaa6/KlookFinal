import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookedComponent } from './find-booked.component';

describe('FindBookedComponent', () => {
  let component: FindBookedComponent;
  let fixture: ComponentFixture<FindBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBookedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
