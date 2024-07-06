import { TestBed } from '@angular/core/testing';

import { AngularRatingShowcaseService } from './angular-rating-showcase.service';

describe('AngularRatingShowcaseService', () => {
  let service: AngularRatingShowcaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularRatingShowcaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
