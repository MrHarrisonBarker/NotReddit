import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from "./post/post.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: '', component: AppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
