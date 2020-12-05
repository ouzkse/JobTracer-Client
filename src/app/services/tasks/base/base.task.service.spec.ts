import { TestBed } from '@angular/core/testing';

import { Base.TaskService } from './base.task.service';

describe('Base.TaskService', () => {
  let service: Base.TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base.TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
