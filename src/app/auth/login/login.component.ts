import { Component } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Ilogin } from '../models/Login.model';
import { SharedObject } from 'src/app/shared/sharedObject';
import { AuthServiceService } from '../auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginModel!: Ilogin;
  loginFormGroup!:FormGroup;
  validateForm!: UntypedFormGroup;

  submitForm(): void {
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
    this.authService.login(this.loginFormGroup.value).subscribe({
      next:(res)=>{
        alert(res.massage)
      },
      error:(err)=>{
        alert(err?.error.massage)
      }
    })
    this.loginModel.userName = this.validateForm.controls['userName'].value;
    this.loginModel.password = this.loginFormGroup.controls['password'].value;
  }

  constructor(private fb: UntypedFormBuilder , private authService : AuthServiceService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.compose([
        Validators.required,
        Validators.pattern(SharedObject.EnglishPattern)
      ])]],
      password: [null, [Validators.compose([
        Validators.required,
        Validators.pattern(SharedObject.PasswordPattern)
      ])]],
      remember: [true],
    });
  }
}
