import { TestBed, inject } from '@angular/core/testing';

import { RestHttpService } from './rest-http.service';

describe('RestHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestHttpService]
    });
  });

  it('should be created', inject([RestHttpService], (service: RestHttpService) => {
    expect(service).toBeTruthy();
  }));
});
