import { TestBed, inject } from '@angular/core/testing';

import { PhtsService } from './phts.service';

describe('PhtsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhtsService]
    });
  });

  it('should be created', inject([PhtsService], (service: PhtsService) => {
    expect(service).toBeTruthy();
  }));
});
