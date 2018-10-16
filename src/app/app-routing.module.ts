import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {UpdatePostComponent} from './update-post/update-post.component';
import {DomainComponent} from './domain/domain.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {DomainListComponent} from './domain-list/domain-list.component';
import {StartComponent} from './start/start.component';

const routes: Routes = [
  {path: 'post/:_id', component: PostDetailComponent},
  {path: 'update/:_id', component: UpdatePostComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddPostComponent},
  {path: 'domains', component: DomainListComponent},
  {path: 'd/:domain', component: DomainComponent},
  {path: 'start', component: StartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
