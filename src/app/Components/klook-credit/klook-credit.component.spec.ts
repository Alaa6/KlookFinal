import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlookCreditComponent } from './klook-credit.component';

describe('KlookCreditComponent', () => {
  let component: KlookCreditComponent;
  let fixture: ComponentFixture<KlookCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlookCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlookCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
