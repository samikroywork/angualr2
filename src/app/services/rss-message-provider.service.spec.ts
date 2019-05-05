import { TestBed } from '@angular/core/testing';

import { RssMessageProviderService } from './rss-message-provider.service';

describe('RssMessageProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RssMessageProviderService = TestBed.get(RssMessageProviderService);
    expect(service).toBeTruthy();
  });
});
