import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler, Injectable} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import * as Sentry from '@sentry/browser';

import {PostComponent} from './post/post.component';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AuthService} from "./auth.service";
import { HomeComponent } from './home/home.component';

Sentry.init({
  dsn: 'https://659bc1284650420a9eb01385b478bd16@sentry.io/1289869'
});

@Injectable()
class SentryErrorHandler implements ErrorHandler {
  constructor() {
  }

  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [AppComponent, PostComponent, LoginComponent, UsersComponent, HomeComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule,
  AngularFirestoreModule],
  providers: [{provide: ErrorHandler, useClass: SentryErrorHandler}, AuthService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}


