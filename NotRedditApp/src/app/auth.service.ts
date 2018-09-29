import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = _firebaseAuth.authState;
  }

  signInWIthGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithGitHub() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    );
  }
}
