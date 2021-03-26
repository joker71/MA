import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinforComponent } from './bookinfor.component';

describe('BookinforComponent', () => {
  let component: BookinforComponent;
  let fixture: ComponentFixture<BookinforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
