import { TestBed } from '@angular/core/testing';

import { CodeSubmissionService } from './code-submission.service';

describe('CodeSubmissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeSubmissionService = TestBed.get(CodeSubmissionService);
    expect(service).toBeTruthy();
  });
});
