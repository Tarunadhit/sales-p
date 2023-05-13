import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login user', () => {
    const username = 'testuser';
    const password = 'testpass';
    const response = { result: 'success' };

    spyOn(service['http'], 'post').and.returnValue(of(response));

    service.login(username, password).subscribe(res => {
      expect(res).toEqual(response);
    });
  });

  it('should handle login error', () => {
    const username = 'testuser';
    const password = 'testpass';
    const error = { message: 'Invalid username or password' };

    spyOn(service['http'], 'post').and.returnValue(throwError(error));

    service.login(username, password).subscribe(res => {
      fail('Expected error');
    }, err => {
      expect(err).toEqual(error);
    });
  });

  it('should register user', () => {
    const username = 'testuser';
    const password = 'testpass';
    const response = { status: 'success' };

    spyOn(service['http'], 'post').and.returnValue(of(response));

    service.register(username, password).subscribe(res => {
      expect(res).toEqual(response);
    });
  });

  it('should handle register error', () => {
    const username = 'testuser';
    const password = 'testpass';
    const error = { message: 'Username already exists' };

    spyOn(service['http'], 'post').and.returnValue(throwError(error));

    service.register(username, password).subscribe(res => {
      fail('Expected error');
    }, err => {
      expect(err).toEqual(error);
    });
  });
});
