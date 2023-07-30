import { TestBed } from '@angular/core/testing';

import { ConfirmationEmailService } from './confirmation-email.service';

describe('ConfirmationEmailService', () => {
  let service: ConfirmationEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
