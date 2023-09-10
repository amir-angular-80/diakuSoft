import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Isignup } from '../models/Signup.model';
import { SharedObject } from 'src/app/shared/sharedObject';

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

  constructor(private fb: UntypedFormBuilder) {}

  submitForm(): void {
    this.signupModel.username=this.validateForm.controls['userName'].value;
    this.signupModel.firstName = this.validateForm.controls['firstname'].value;
    this.signupModel.lastName = this.validateForm.controls['lastname'].value
    this.signupModel.email = this.validateForm.controls['email'].value;
    this.signupModel.mobile = this.validateForm.controls['mobile'].value;
    this.signupModel.password =this.validateForm.controls['password'].value;
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

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
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
      lastname:[null,Validators.required],
      mobile:[null,Validators.compose([
        Validators.required,
        Validators.pattern(SharedObject.MobilePattern)
      ])],

      remember: [true],
    });
  }
}
