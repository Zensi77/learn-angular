import { TestBed } from '@angular/core/testing';

import { JerSideMenuService } from './jer-side-menu.service';

describe('JerSideMenuService', () => {
  let service: JerSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JerSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
