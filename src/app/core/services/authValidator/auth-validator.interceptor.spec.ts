import { TestBed } from '@angular/core/testing';

import { AuthValidatorInterceptor } from './auth-validator.interceptor';

describe('AuthValidatorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthValidatorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthValidatorInterceptor = TestBed.inject(AuthValidatorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
