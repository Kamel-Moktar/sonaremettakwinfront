import { TestBed } from '@angular/core/testing';

import { AcheminementService } from './acheminement.service';

describe('AcheminementService', () => {
  let service: AcheminementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcheminementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
