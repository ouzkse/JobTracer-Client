import { TestBed } from '@angular/core/testing';

import { EducationInformationDataService } from './education-information.data.service';

describe('EducationInformationDataService', () => {
  let service: EducationInformationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationInformationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
