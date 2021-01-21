import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeTrainsComponent } from './europe-trains.component';

describe('EuropeTrainsComponent', () => {
  let component: EuropeTrainsComponent;
  let fixture: ComponentFixture<EuropeTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeTrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
