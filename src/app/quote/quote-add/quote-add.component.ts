

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

import { Quote } from "../quote";
import { QuoteService } from "../quote.service";
import { BaseEditComponent } from '@app/base/base-edit.component';







@Component({
    selector: 'app-quote-add',
    templateUrl: './quote-add.component.html',
    styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent extends BaseEditComponent<Quote> implements OnInit {

    quote: Quote;
    errorMessage: string;
    public quoteForm: FormGroup;



    constructor(protected quoteService: QuoteService, protected route: ActivatedRoute, protected router: Router, private fb: FormBuilder) {
        super(quoteService, route, router, 'quotes')
        this.createForm();
    }


    private createForm(): void {
        this.quoteForm = this.fb.group({
            tags: ['', [Validators.required,]],
            text: ['', [Validators.required,]],
            explanation: ['', [Validators.required,]],
            page: ['', [Validators.max(1430),
            ]],

        });
    }




    getForm() { return this.quoteForm };

    submit() {
        super.onSubmit(this.entity);
    }

}
