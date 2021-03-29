import { TestBed } from '@angular/core/testing';

import { AccessAppGuard } from './access-app.guard';

describe('AccessAppGuard', () => {
  let guard: AccessAppGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessAppGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
