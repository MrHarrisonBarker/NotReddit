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
import {AuthService} from './auth.service';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdatePostComponent} from './update-post/update-post.component';
import {DomainComponent} from './domain/domain.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {DomainListComponent} from './domain-list/domain-list.component';
import {StartComponent} from './start/start.component';
import {NgPipesModule} from 'ngx-pipes';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ClipboardModule} from 'ngx-clipboard';
import {CrosspostComponent} from './crosspost/crosspost.component';
import {GlobalsService} from './globals.service';
import {NavComponent} from './nav/nav.component';
import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import {RouterModule} from '@angular/router';

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
    declarations: [AppComponent, PostComponent, LoginComponent, UsersComponent, HomeComponent, AddPostComponent, UpdatePostComponent, DomainComponent, PostDetailComponent, DomainListComponent, StartComponent, SidebarComponent, CrosspostComponent, NavComponent, CommentComponent, AddCommentComponent],
    imports: [
        BrowserModule,
        TagInputModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
        AngularFireAuthModule,
        FormsModule,
        ReactiveFormsModule,
        NgPipesModule,
        ClipboardModule,
        BrowserAnimationsModule
    ],
    providers: [{provide: ErrorHandler, useClass: SentryErrorHandler}, AuthService, GlobalsService],
    bootstrap: [AppComponent]
})

export class AppModule {
}


