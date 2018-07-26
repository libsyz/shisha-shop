import { AuthenticationServiceService } from './authentication-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationServiceService,
              private router: Router) { 

  }

  canActivate() {
     return this.authService.user$.subscribe(((user) => {
      if (user === null) {
        this.router.navigate(["login"]);
        return false
      }
      else {
        return true;
      }
    })
  )}

}
