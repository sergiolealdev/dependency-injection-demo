import { TestBed, inject } from '@angular/core/testing';

import { DistanceConverterService } from './distance-converter-service.service';

describe('DistanceConverterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistanceConverterService]
    });
  });

  it('should ...', inject([DistanceConverterService], (service: DistanceConverterService) => {
    expect(service).toBeTruthy();
  }));
});
