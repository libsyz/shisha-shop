import { AuthenticationServiceService } from './../authentication-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor( private authService: AuthenticationServiceService) { 
    }

  logOut() {
    this.authService.logOut();
  }

}
