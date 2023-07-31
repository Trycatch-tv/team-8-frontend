import { TestBed } from '@angular/core/testing';

import { StudenteacherService } from './studenteacher.service';

describe('StudenteacherService', () => {
  let service: StudenteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
