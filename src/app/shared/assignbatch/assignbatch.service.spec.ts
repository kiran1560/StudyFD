import { TestBed } from '@angular/core/testing';

import { AssignbatchService } from './assignbatch.service';

describe('AssignbatchService', () => {
  let service: AssignbatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignbatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
