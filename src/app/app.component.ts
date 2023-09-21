import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth/auth.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor(private authService: AuthServiceService) {}
  loginUserShow = this.authService.loginUser;
  ngOnInit(): void {
    this.authService.userInvalid;
  }
}
