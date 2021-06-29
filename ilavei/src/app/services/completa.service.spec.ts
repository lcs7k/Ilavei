import { TestBed } from '@angular/core/testing';
import { Completa } from '../models/completa';

import { CompletaService } from './completa.service';

describe('CompletaService', () => {
  let service:CompletaService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
