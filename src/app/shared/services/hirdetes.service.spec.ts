import { TestBed } from '@angular/core/testing';

import { HirdetesService } from './hirdetes.service';

describe('HirdetesService', () => {
  let service: HirdetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HirdetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
