import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import  { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  user$: Observable<firebase.User>

  constructor(public fireAuth: AngularFireAuth) { 
    this.user$ = fireAuth.authState;
  }

  login(){
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }

  logOut(){
    this.fireAuth.auth.signOut();
  }
}
