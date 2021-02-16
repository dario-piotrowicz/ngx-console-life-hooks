import { TestBed } from '@angular/core/testing';

import { ClearConsoleGuard } from './clear-console.guard';

describe('ClearConsoleGuard', () => {
  let guard: ClearConsoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClearConsoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
