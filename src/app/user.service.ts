import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularDB: AngularFireDatabase) { 
    
  }

  save(user: firebase.User){
    this.angularDB.object("/users/" + user.uid).update({
      username: user.displayName,
      email: user.email
    })
  }


  get(uid: string){
    return this.angularDB.object("/users/" + uid);
  }
}
