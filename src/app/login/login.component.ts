import {Component, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private  user: Observable<firebase.User>;

  constructor(public fireAuth: AngularFireAuth,
              public authService: AuthService,
              private router: Router,
              private zone: NgZone) {
  }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.authService.signInWIthGoogle().then( (data) => {
      console.log(data);
      this.user = this.fireAuth.authState;
      this.zone.run( () =>
          this.router.navigate(['/home'])
      );
    }).catch((err) => {
      console.log(err);
    });
  }

  signInWithGitHub() {
    this.authService.signInWithGitHub().then( (data) => {
      this.router.navigate(['/home']);
    }).catch((err) => {
      console.log(err);
    });
  }

}
