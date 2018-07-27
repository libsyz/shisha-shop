import { AuthenticationServiceService } from './authentication-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationServiceService,
              private router: Router) { 
  }

  canActivate(route, state: RouterStateSnapshot ) {
    return this.authService.user$.map(user => {
      if (user){ 
      return true;
      }
      else {
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
      }
    })

  }

}
 ;