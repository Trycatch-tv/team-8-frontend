import { TestBed } from '@angular/core/testing';

import { CoursestudenteacherService } from './coursestudenteacher.service';

describe('CoursestudenteacherService', () => {
  let service: CoursestudenteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursestudenteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
