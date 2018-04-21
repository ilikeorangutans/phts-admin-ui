import { TestBed, inject } from '@angular/core/testing';

import { UploadQueueService } from './upload-queue.service';

describe('UploadQueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadQueueService]
    });
  });

  it('should be created', inject([UploadQueueService], (service: UploadQueueService) => {
    expect(service).toBeTruthy();
  }));
});
