import { Component } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Isignup } from '../models/Signup.model';
import { SharedObject } from 'src/app/shared/sharedObject';
import { AuthServiceService } from '../auth.service.service';
import { Route, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

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
    private authService: AuthServiceService,
    private router:Router
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.authService.signUp(this.validateForm.value).subscribe(res=>{
        alert(res.massage);
        this.router.navigate([LoginComponent]);
      })
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
      repassword:['',Validators.required],
      remember: [true],
    });

    if(this.signupModel.password !== this.signupModel.confirmPassword){
      alert('erorr')
    }
  }
}

