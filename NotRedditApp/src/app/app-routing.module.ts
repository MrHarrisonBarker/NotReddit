import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostComponent} from './post/post.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: 'posts', component: PostComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
