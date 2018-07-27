import { AuthenticationServiceService } from './authentication-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationServiceService,
              private router: Router) { 
  }

  canActivate() {
    return this.authService.user$.map(user => {
      if (user ){ 
      return true;
      }
      else {
        this.router.navigate(['login']);
        return false;
      }
    })

  }

}
 ;