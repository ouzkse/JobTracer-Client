import { TestBed } from '@angular/core/testing';

import { JobFinderNavigationService } from './jobfinder.navigation.service';

describe('Jobfinder.NavigationService', () => {
  let service: JobFinderNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobFinderNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
