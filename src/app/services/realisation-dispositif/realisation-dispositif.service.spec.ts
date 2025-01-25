import { TestBed } from '@angular/core/testing';

import { RealisationDispositifService } from './realisation-dispositif.service';

describe('RealisationDispositifService', () => {
  let service: RealisationDispositifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealisationDispositifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
