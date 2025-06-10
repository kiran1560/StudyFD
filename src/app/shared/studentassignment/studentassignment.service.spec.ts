import { TestBed } from '@angular/core/testing';

import { StudentassignmentService } from './studentassignment.service';

describe('StudentassignmentService', () => {
  let service: StudentassignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentassignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
