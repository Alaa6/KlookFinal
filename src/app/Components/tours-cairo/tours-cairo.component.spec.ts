import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursCairoComponent } from './tours-cairo.component';

describe('ToursCairoComponent', () => {
  let component: ToursCairoComponent;
  let fixture: ComponentFixture<ToursCairoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursCairoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursCairoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
