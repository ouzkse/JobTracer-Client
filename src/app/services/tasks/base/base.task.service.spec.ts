import { TestBed } from '@angular/core/testing';

import { BaseTaskService } from './base.task.service';

describe('BaseTaskService', () => {
  let service: BaseTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
