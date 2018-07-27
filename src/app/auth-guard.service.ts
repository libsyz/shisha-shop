import { AuthenticationServiceService } from './authentication-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean;
  constructor(private authService: AuthenticationServiceService,
              private router: Router) { 
  this.isLoggedIn = false;
  }

  signIn() {
    this.isLoggedIn = true;
  }

  signOut() {
    this.isLoggedIn = false;
  }

}
