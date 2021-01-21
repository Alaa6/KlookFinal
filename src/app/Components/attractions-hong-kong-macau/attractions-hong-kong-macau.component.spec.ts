import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsHongKongMacauComponent } from './attractions-hong-kong-macau.component';

describe('AttractionsHongKongMacauComponent', () => {
  let component: AttractionsHongKongMacauComponent;
  let fixture: ComponentFixture<AttractionsHongKongMacauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionsHongKongMacauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsHongKongMacauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
