import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QuoteService} from './quote.service';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteAddComponent } from './quote-add/quote-add.component';
//import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { QuoteRoutingModule} from './quote-routing.module';
import { NgSelectModule,NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

//import { JsonSchemaFormModule }               from 'angular2-json-schema-form';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    QuoteRoutingModule,
    HttpModule
  ],
  declarations: [
    QuoteListComponent,
    QuoteAddComponent,
    ],
  exports: [
    QuoteListComponent,
    QuoteAddComponent,
  ],
  providers: [QuoteService]
})
export class QuoteModule {
}