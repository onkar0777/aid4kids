
import { Component, OnInit, Input } from '@angular/core';
import { Quote } from "../quote";
import { Router } from "@angular/router";
import { QuoteService } from "../quote.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
    selector: 'app-quote-list',
    templateUrl: './quote-list.component.html',
    styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent extends BaseListComponent<Quote>
    implements OnInit {

    @Input() cards = true

    constructor(protected quoteService: QuoteService, protected router: Router) {
        super(quoteService, router)
    }

    fldChange(values: any) {
        this.cards = values.currentTarget.checked
        
        console.log(values.currentTarget.checked);
    }
}