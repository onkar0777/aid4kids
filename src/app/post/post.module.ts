import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';
//import { PostEditComponent } from './post-edit/post-edit.component';
import { PostRoutingModule} from './post-routing.module';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { PostViewComponent } from '@app/post/post-view/post-view.component';
import { PostService } from '@app/post/post.service';

//import { JsonSchemaFormModule }               from 'angular2-json-schema-form';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    PostRoutingModule,
    HttpModule
  ],
  declarations: [
    PostListComponent,
    PostAddComponent,
    PostViewComponent],
  exports: [
    PostListComponent,
    PostAddComponent,
    PostViewComponent
  ],
  providers: [
    PostService,
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
          notFoundText: 'Custom not found'
      }
  }
  ]
})
export class PostModule {
}