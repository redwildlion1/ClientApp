/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiAnafService } from './api-anaf.service';

describe('Service: ApiAnaf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiAnafService]
    });
  });

  it('should ...', inject([ApiAnafService], (service: ApiAnafService) => {
    expect(service).toBeTruthy();
  }));
});
