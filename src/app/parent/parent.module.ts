import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ParentService} from './parent.service';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentAddComponent } from './parent-add/parent-add.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { ParentRoutingModule} from './parent-routing.module';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { ParentViewComponent } from '@app/parent/parent-view/parent-view.component';
import { ParentManageComponent } from '@app/parent/parent-manage/parent-manage.component';

//import { JsonSchemaFormModule }               from 'angular2-json-schema-form';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    ParentRoutingModule,
    HttpModule
  ],
  declarations: [
    ParentListComponent,
    ParentAddComponent,
    ParentViewComponent,
    ParentManageComponent,
    ParentEditComponent],
  exports: [
    ParentListComponent,
    ParentAddComponent,
  ],
  providers: [ParentService]
})
export class ParentModule {
}