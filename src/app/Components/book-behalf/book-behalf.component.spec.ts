import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBehalfComponent } from './book-behalf.component';

describe('BookBehalfComponent', () => {
  let component: BookBehalfComponent;
  let fixture: ComponentFixture<BookBehalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBehalfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBehalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
