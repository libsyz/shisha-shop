import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import  { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  user$: Observable<firebase.User>

  constructor(public fireAuth: AngularFireAuth,
              public route: ActivatedRoute,
              public router: Router) { 
    this.user$ = fireAuth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  logOut(){
    this.fireAuth.auth.signOut();
  }
}
