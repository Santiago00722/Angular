import { TestBed } from '@angular/core/testing';

import { CavvService } from './cavv.service';

describe('CavvService', () => {
  let service: CavvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CavvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
