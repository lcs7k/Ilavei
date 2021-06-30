import { TestBed } from '@angular/core/testing';

import { OrdemService } from './ordem.service';

describe('OrdemService', () => {
  let service: OrdemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
