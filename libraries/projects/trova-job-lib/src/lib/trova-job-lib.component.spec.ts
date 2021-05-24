import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovaJobLibComponent } from './trova-job-lib.component';

describe('TrovaJobLibComponent', () => {
  let component: TrovaJobLibComponent;
  let fixture: ComponentFixture<TrovaJobLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrovaJobLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrovaJobLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
