import { TestBed } from '@angular/core/testing';

import { UserBackpackService } from './user-backpack.service';

describe('UserBackpackService', () => {
  let service: UserBackpackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBackpackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
