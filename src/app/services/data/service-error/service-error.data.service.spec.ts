import { TestBed } from '@angular/core/testing';

import { ServiceErrorDataService } from './service-error.data.service';

describe('ServiceErrorDataServiceService', () => {
  let service: ServiceErrorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceErrorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
