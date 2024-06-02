import { TestBed } from '@angular/core/testing';

import { CnvService } from './cnv.service';

describe('CnvService', () => {
  let service: CnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
