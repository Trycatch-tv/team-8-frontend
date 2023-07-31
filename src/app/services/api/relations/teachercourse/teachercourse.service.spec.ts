import { TestBed } from '@angular/core/testing';

import { TeachercourseService } from './teachercourse.service';

describe('TeachercourseService', () => {
  let service: TeachercourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachercourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
