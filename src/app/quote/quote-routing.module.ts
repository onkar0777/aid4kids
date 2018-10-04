

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { QuoteListComponent} from './quote-list/quote-list.component';
import { QuoteAddComponent} from './quote-add/quote-add.component';
//import { QuoteEditComponent} from './quote-edit/quote-edit.component';

const quoteRoutes: Routes = [
  {path: 'quotes', component: QuoteListComponent},
  {path: 'quotes/add', component: QuoteAddComponent},
  {path: 'quotes/:id/edit', component: QuoteAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(quoteRoutes)],
  exports: [RouterModule]
})

export class QuoteRoutingModule {
}