import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostComponent} from './post/post.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {AddPostComponent} from "./add-post/add-post.component";

const routes: Routes = [
  {path: 'posts', component: PostComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddPostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
