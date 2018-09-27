import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler, Injectable } from "@angular/core";

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";

import * as Sentry from "@sentry/browser";
import { PostComponent } from './post/post.component';

Sentry.init({
  dsn: "https://659bc1284650420a9eb01385b478bd16@sentry.io/1289869"
});

@Injectable()
class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent]
})

export class AppModule {}
