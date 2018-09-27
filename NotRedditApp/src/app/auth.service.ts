import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private messageService: MessageService) {
    this.user = _firebaseAuth.authState;
  }

  signInWIthGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
