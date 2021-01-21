import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsHongKongComponent } from './attractions-hong-kong.component';

describe('AttractionsHongKongComponent', () => {
  let component: AttractionsHongKongComponent;
  let fixture: ComponentFixture<AttractionsHongKongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionsHongKongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsHongKongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
