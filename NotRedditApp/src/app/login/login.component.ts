import {Component, OnInit, HostBinding, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private  user: Observable<firebase.User>;

  constructor(public fireAuth: AngularFireAuth , public authService: AuthService, private router: Router) {
    this.user = fireAuth.authState;
  }

  ngOnInit() {

  }

  signInWithGoogle() {
    this.authService.signInWIthGoogle().then((data) => {
      this.router.navigate(['/home']);
    }).catch((err) => {
      console.log(err);
    });
  }

}
