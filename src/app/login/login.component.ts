import { AuthenticationServiceService } from './../authentication-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationServiceService) {
  }


  loginFirebase() {
    this.authService.login();
  }
}
