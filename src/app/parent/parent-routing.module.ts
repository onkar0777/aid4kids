

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ParentListComponent} from './parent-list/parent-list.component';
import { ParentAddComponent} from './parent-add/parent-add.component';
import { ParentEditComponent} from './parent-edit/parent-edit.component';
import { ParentManageComponent } from '@app/parent/parent-manage/parent-manage.component';
import { Route } from '@app/core';

const parentRoutes: Routes = [
  Route.withShell([
  {path: 'parents', component: ParentListComponent},
  {path: 'parents/add', component: ParentManageComponent},
  {path: 'parents/:id/edit', component: ParentManageComponent}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(parentRoutes)],
  exports: [RouterModule]
})

export class ParentRoutingModule {
}