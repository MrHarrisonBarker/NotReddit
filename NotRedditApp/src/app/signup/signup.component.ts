import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUp(email , password) {
    firebase.auth().createUserWithEmailAndPassword(email , password).catch(function (error) {
      console.log('ERROR' + error);
    });
  }

}
