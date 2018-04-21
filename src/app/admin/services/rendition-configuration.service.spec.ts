import { TestBed, inject } from '@angular/core/testing';

import { RenditionConfigurationService } from './rendition-configuration.service';

describe('RenditionConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenditionConfigurationService]
    });
  });

  it('should be created', inject([RenditionConfigurationService], (service: RenditionConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
