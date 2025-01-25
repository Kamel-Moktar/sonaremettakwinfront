import { TestBed } from '@angular/core/testing';

import { FormationDispositifService } from './formation-dispositif.service';

describe('FormationDispositifService', () => {
  let service: FormationDispositifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationDispositifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
