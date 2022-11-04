import { TestBed } from '@angular/core/testing';

import { OsmFeaturesService } from './osm-features.service';

describe('OsmFeaturesService', () => {
  let service: OsmFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsmFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
