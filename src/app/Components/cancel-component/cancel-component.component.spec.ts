import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelComponentComponent } from './cancel-component.component';

describe('CancelComponentComponent', () => {
  let component: CancelComponentComponent;
  let fixture: ComponentFixture<CancelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
