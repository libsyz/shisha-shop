import { Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,
              private authService: AuthenticationServiceService){
            

            this.authService.user$.subscribe(user => {
              if (user) {
                this.router.navigate([localStorage.getItem("returnUrl")])
              }
            })


              }

}
