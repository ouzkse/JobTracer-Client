import {MatchResultDataService} from './match-result.data.service';
import {TestBed} from '@angular/core/testing';

describe('MatchResult.DataService', () => {
  let service: MatchResultDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchResultDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
