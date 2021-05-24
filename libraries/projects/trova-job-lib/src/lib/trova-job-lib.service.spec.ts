import { TestBed } from '@angular/core/testing';

import { TrovaJobLibService } from './trova-job-lib.service';

describe('TrovaJobLibService', () => {
  let service: TrovaJobLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrovaJobLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
