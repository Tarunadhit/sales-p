import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  registerForm!: FormGroup;
  errorMessage!: string;
  successMessage!: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
    });
  }

  tryRegister(value: { password1: any; password2: any; }) {
    if (value.password1 !== value.password2) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    this.authService.doRegister(value)
      .then((res: any) => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created successfully';
        this.router.navigate(['/login']);
      }, (err: { message: string; }) => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

  ngOnInit() {
  }

}
