

import { Route, extract } from '@app/core';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ChildListComponent} from './child-list/child-list.component';
import { ChildAddComponent} from './child-add/child-add.component';
import { ChildViewComponent } from '@app/child/child-view/child-view.component';


const childRoutes: Routes = [
  Route.withShell([
  {path: 'childs', component: ChildListComponent},
  {path: 'childs/add', component: ChildAddComponent},
  {path: 'childs/:id/edit', component: ChildAddComponent},
  {path: 'childs/:id/view', component: ChildViewComponent}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})

export class ChildRoutingModule {
}