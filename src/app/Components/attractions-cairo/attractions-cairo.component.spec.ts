import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsCairoComponent } from './attractions-cairo.component';

describe('AttractionsCairoComponent', () => {
  let component: AttractionsCairoComponent;
  let fixture: ComponentFixture<AttractionsCairoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttractionsCairoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsCairoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
