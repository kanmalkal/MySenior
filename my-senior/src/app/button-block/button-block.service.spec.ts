
import { TestBed } from '@angular/core/testing';

import { ButtonBlockService } from './button-block.service';

describe('ButtonBlockServiceService', () => {
  let service: ButtonBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
