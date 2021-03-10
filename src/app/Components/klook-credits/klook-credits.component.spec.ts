import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlookCreditsComponent } from './klook-credits.component';

describe('KlookCreditsComponent', () => {
  let component: KlookCreditsComponent;
  let fixture: ComponentFixture<KlookCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlookCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlookCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
