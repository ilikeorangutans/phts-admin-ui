import { TestBed, inject } from '@angular/core/testing';

import { ShareSiteService } from './share-site.service';

describe('ShareSiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareSiteService]
    });
  });

  it('should be created', inject([ShareSiteService], (service: ShareSiteService) => {
    expect(service).toBeTruthy();
  }));
});
