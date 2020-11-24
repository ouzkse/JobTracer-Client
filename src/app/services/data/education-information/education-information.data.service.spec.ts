import { TestBed } from '@angular/core/testing';

import { EducationInformation.DataService } from './education-information.data.service';

describe('EducationInformation.DataService', () => {
  let service: EducationInformation.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationInformation.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
