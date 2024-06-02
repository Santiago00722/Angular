import { TestBed } from '@angular/core/testing';

import { MenRedsysService } from './men-redsys.service';

describe('MenRedsysService', () => {
  let service: MenRedsysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenRedsysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
