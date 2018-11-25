import { TestBed, inject } from '@angular/core/testing';

import { ImageDetectionService } from './image-detection.service';

describe('ImageDetectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageDetectionService]
    });
  });

  it('should be created', inject([ImageDetectionService], (service: ImageDetectionService) => {
    expect(service).toBeTruthy();
  }));
});
