import { TestBed } from '@angular/core/testing';

import { GlobLibService } from './glob-lib.service';

describe('GlobLibService', () => {
  let service: GlobLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
