import { UserComponent } from './../user/user.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import  { Observable } from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  user$: Observable<firebase.User> ;

  constructor(private firebaseAuth: AngularFireAuth ) { 
    this.user$ = firebaseAuth.authState
    }

  logOut() {
    this.firebaseAuth.auth.signOut();
  }

}
