import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtComponentComponent } from './cmt-component.component';

describe('CmtComponentComponent', () => {
  let component: CmtComponentComponent;
  let fixture: ComponentFixture<CmtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmtComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
