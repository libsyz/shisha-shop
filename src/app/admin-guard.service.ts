import { CanActivate, Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';
import { Injectable } from '@angular/core';
import "rxjs/operator/map"
  
@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthenticationServiceService,
              private router: Router) {
   }

   canActivate() {
     return this.authService.user$.map(user => {
        
        if (user['admin'] == true ) {
          console.log(user);
          return true
        }
        else {
          this.router.navigate(['/']);
          return false;
        }
     })
   }
}
