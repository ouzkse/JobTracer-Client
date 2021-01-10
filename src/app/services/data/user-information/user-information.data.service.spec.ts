import {TestBed} from '@angular/core/testing';

import {UserInformationDataService} from './user-information.data.service';

describe('UserInformation.DataService', () => {
  let service: UserInformationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInformationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
