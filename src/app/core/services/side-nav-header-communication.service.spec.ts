import { TestBed } from '@angular/core/testing';

import { SideNavHeaderCommunicationService } from './side-nav-header-communication.service';

describe('SideNavHeaderCommunicationService', () => {
  let service: SideNavHeaderCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavHeaderCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
