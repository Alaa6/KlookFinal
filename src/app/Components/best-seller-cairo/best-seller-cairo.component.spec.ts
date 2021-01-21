import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerCairoComponent } from './best-seller-cairo.component';

describe('BestSellerCairoComponent', () => {
  let component: BestSellerCairoComponent;
  let fixture: ComponentFixture<BestSellerCairoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellerCairoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellerCairoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
