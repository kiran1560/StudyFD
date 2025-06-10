import { TestBed } from '@angular/core/testing';

import { StudentbatchesService } from './studentbatches.service';

describe('StudentbatchesService', () => {
  let service: StudentbatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentbatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
