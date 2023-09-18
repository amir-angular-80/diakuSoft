import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Isignup } from '../models/Signup.model';
import { SharedObject } from 'src/app/shared/sharedObject';
import { AuthServiceService } from '../auth.service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  validateForm!: UntypedFormGroup;
  passwordVisible = false;
  password?: string;
  signupModel!: Isignup;

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthServiceService
  ) {}

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
    this.authService.signUp(this.validateForm.value).subscribe({
      next: (res : Isignup) => {
        this.validateForm.controls['userName'].setValue(res.username);
        this.validateForm.controls['firstname'].setValue(res.firstName);
        this.validateForm.controls['lastname'].setValue(res.lastName);
        this.validateForm.controls['email'].setValue(res.email);
        this.validateForm.controls['mobile'].setValue(res.mobile);
        this.validateForm.controls['password'].setValue(res.password);
      },
      error: (err) => {
        alert(err?.error.massage);
      },
    });
    this.signupModel.username = this.validateForm.controls['userName'].value;
    this.signupModel.firstName = this.validateForm.controls['firstname'].value;
    this.signupModel.lastName = this.validateForm.controls['lastname'].value;
    this.signupModel.email = this.validateForm.controls['email'].value;
    this.signupModel.mobile = this.validateForm.controls['mobile'].value;
    this.signupModel.password = this.validateForm.controls['password'].value;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.compose([
        Validators.required,
        Validators.pattern(SharedObject.PasswordPattern)
      ])]],
      email: [
        null,
        [
          Validators.compose([
            Validators.required,
            Validators.pattern(SharedObject.EmailPattern),
          ]),
        ],
      ],
      firstname: [null, Validators.compose([Validators.required])],
      lastname: [null, Validators.required],
      mobile: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(SharedObject.MobilePattern),
        ]),
      ],

      remember: [true],
    });
  }
}
