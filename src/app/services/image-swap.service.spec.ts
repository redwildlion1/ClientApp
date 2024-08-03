import { TestBed } from '@angular/core/testing';

import { ImageSwapService } from './image-swap.service';

describe('ImageSwapService', () => {
  let service: ImageSwapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSwapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
