import { TestBed } from '@angular/core/testing';

import { StudentcourseService } from './studentcourse.service';

describe('StudentcourseService', () => {
  let service: StudentcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
