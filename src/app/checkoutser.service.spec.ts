import { TestBed } from '@angular/core/testing';

import { CheckoutserService } from './checkoutser.service';

describe('CheckoutserService', () => {
  let service: CheckoutserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
