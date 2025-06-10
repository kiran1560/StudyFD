import { TestBed } from '@angular/core/testing';

import { TeacherbatchesService } from './teacherbatches.service';

describe('TeacherbatchesService', () => {
  let service: TeacherbatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherbatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
