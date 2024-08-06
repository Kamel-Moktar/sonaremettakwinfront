import {TestBed} from '@angular/core/testing';

import {DecoupageService} from './decoupage.service';

describe('DecoupageService', () => {
  let service: DecoupageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoupageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
