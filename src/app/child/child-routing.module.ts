

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ChildListComponent} from './child-list/child-list.component';
import { ChildManageComponent} from './child-manage/child-manage.component';
import { Route } from '@app/core';


const childRoutes: Routes = [
  Route.withShell([
  {path: 'childs', component: ChildListComponent},
  {path: 'childs/add', component: ChildManageComponent},
  {path: 'childs/:id/edit', component: ChildManageComponent}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})

export class ChildRoutingModule {
}