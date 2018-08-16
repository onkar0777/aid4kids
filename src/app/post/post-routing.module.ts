

import { Route, extract } from '@app/core';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PostListComponent} from './post-list/post-list.component';
import { PostAddComponent} from './post-add/post-add.component';
import { PostViewComponent } from '@app/post/post-view/post-view.component';


const postRoutes: Routes = [
  Route.withShell([
  {path: 'posts', component: PostListComponent},
  {path: 'posts/add', component: PostAddComponent},
  {path: 'posts/:id/edit', component: PostAddComponent},
  {path: 'posts/:id/view', component: PostViewComponent}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(postRoutes)],
  exports: [RouterModule]
})

export class PostRoutingModule {
}