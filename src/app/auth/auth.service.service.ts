import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Isignup } from './models/Signup.model';
import { Ilogin } from './models/Login.model';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private baseUrl: string = 'https://server.diakusoft.ir/api/Auth/';

  constructor(private http: HttpClient) {}

  signUp(userObj: Isignup) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  login(loginObj: Ilogin) {
    return this.http.post<any>(`${this.baseUrl}login`, loginObj );
  }
}
