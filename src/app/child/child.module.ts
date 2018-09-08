import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChildService} from './child.service';
import { ChildListComponent } from './child-list/child-list.component';
import { ChildAddComponent } from './child-add/child-add.component';
//import { ChildEditComponent } from './child-edit/child-edit.component';
import { ChildRoutingModule} from './child-routing.module';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { ChildViewComponent } from '@app/child/child-view/child-view.component';

//import { JsonSchemaFormModule }               from 'angular2-json-schema-form';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    ChildRoutingModule,
    HttpModule
  ],
  declarations: [
    ChildListComponent,
    ChildAddComponent,
    ChildViewComponent],
  exports: [
    ChildListComponent,
    ChildAddComponent,
    ChildViewComponent
  ],
  providers: [ChildService]
})
export class ChildModule {
}