import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private fireBaseAuth: AngularFireAuth) {
    this.user = fireBaseAuth.authState;

    /*this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });*/
  }

  signInWIthGoogle() {
    return this.fireBaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithGitHub() {
    return this.fireBaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }
}
