
import { Component, OnInit } from '@angular/core';

import { Quote} from "../quote";
import { QuoteService} from "../quote.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';


@Component({
selector: 'app-quote-edit',
templateUrl: './quote-edit.component.html',
styleUrls: ['./quote-edit.component.css']
})
export class QuoteEditComponent extends BaseEditComponent<Quote> implements OnInit {
    quote: Quote;
    errorMessage: string;

    constructor(protected quoteService: QuoteService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(quoteService, route, router, 'quotes')
    }

    getForm():any{
        return null;
    }

}