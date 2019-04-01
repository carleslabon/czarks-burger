import { AuthService } from '../shared/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm = this.authService.loginForm;
  public user$ = this.authService.user;

  constructor( private authService: AuthService , private router: Router) { }

}
