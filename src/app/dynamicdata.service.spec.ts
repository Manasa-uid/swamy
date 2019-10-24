import { TestBed } from '@angular/core/testing';

import { DynamicdataService } from './dynamicdata.service';

describe('DynamicdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicdataService = TestBed.get(DynamicdataService);
    expect(service).toBeTruthy();
  });
});
