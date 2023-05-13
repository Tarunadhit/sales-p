import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { AuthService } from '../services/auth.service';
import { of, throwError } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ RegisterComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid if fields are empty', () => {
    component.registerForm.controls['username'].setValue('');
    component.registerForm.controls['password'].setValue('');
    component.registerForm.controls['confirmPassword'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('form should be invalid if username is invalid', () => {
    component.registerForm.controls['username'].setValue('user*name');
    component.registerForm.controls['password'].setValue('password');
    component.registerForm.controls['confirmPassword'].setValue('password');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('form should be invalid if password is invalid', () => {
    component.registerForm.controls['username'].setValue('username');
    component.registerForm.controls['password'].setValue('pass');
    component.registerForm.controls['confirmPassword'].setValue('pass');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('form should be invalid if confirm password does not match password', () => {
    component.registerForm.controls['username'].setValue('username');
    component.registerForm.controls['password'].setValue('password');
    component.registerForm.controls['confirmPassword'].setValue('pass');
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('form should be valid if all fields are valid', () => {
    component.registerForm.controls['username'].setValue('username');
    component.registerForm.controls['password'].setValue('password');
    component.registerForm.controls['confirmPassword'].setValue('password');
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('should call authService.registerUser() and navigate to /login on successful registration', () => {
    const spy = spyOn(authService, 'registerUser').and.returnValue(of(true));
    const navigateSpy = spyOn((<any>component).router, 'navigateByUrl');
    component.registerForm.controls['username'].setValue('username');
    component.registerForm.controls['password'].setValue('password');
    component.registerForm.controls['confirmPassword'].setValue('password');
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith('/login');
  });

  it('should show error message on failed registration', () => {
    spyOn(authService, 'registerUser').and.returnValue(throwError('Error'));
    component.registerForm.controls['username'].setValue('username');
    component.registerForm.controls['password'].setValue('password');
    component.registerForm.controls['confirmPassword'].setValue('password');
    component.onSubmit();
    expect(component.errorMessage).toEqual('Registration failed. Please try again.');
  });
});
