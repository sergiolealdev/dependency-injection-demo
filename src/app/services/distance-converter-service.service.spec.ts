import { TestBed, inject } from '@angular/core/testing';

import { DistanceConverterServiceService } from './distance-converter-service.service';

describe('DistanceConverterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistanceConverterServiceService]
    });
  });

  it('should ...', inject([DistanceConverterServiceService], (service: DistanceConverterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
