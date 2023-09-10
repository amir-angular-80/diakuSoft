import { Component } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Ilogin } from '../models/Login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  validateForm!: UntypedFormGroup;
  loginModel!: Ilogin;
  loginFormGroup!:FormGroup;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
  submitForm(): void {
    this.loginModel.userId = this.validateForm.controls['userName'].value;
    this.loginModel.password = this.loginFormGroup.controls['password'].value;
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
