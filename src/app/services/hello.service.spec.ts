import { TestBed } from '@angular/core/testing';
import { HelloService } from './hello.service';

describe('HelloServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloService = TestBed.get(HelloService);
    expect(service).toBeTruthy();
  });
});
