import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiecesSubCategoryComponent } from './experieces-sub-category.component';

describe('ExperiecesSubCategoryComponent', () => {
  let component: ExperiecesSubCategoryComponent;
  let fixture: ComponentFixture<ExperiecesSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiecesSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiecesSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
