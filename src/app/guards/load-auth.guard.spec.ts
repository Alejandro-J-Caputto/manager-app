import { TestBed } from '@angular/core/testing';

import { LoadAuthGuard } from './load-auth.guard';

describe('LoadAuthGuard', () => {
  let guard: LoadAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
