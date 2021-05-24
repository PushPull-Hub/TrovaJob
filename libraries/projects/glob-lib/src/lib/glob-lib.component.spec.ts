import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobLibComponent } from './glob-lib.component';

describe('GlobLibComponent', () => {
  let component: GlobLibComponent;
  let fixture: ComponentFixture<GlobLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
