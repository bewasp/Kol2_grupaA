import { TestBed, inject } from '@angular/core/testing';

import { JzDataService } from './jz-data.service';

describe('JzDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JzDataService]
    });
  });

  it('should be created', inject([JzDataService], (service: JzDataService) => {
    expect(service).toBeTruthy();
  }));
});
