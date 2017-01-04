/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchService } from '../service/search.service';

describe('SearchPfcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService]
    });
  });

  it('should ...', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
