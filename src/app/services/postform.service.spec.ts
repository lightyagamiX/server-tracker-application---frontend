import { TestBed } from '@angular/core/testing';

import { PostformService } from './postform.service';

describe('PostformService', () => {
  let service: PostformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
