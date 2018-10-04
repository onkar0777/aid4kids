
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Quote} from "../quote";
import { QuoteService} from "../quote.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';
import { BaseEntity } from '@app/base/base';



@Component({
selector: 'quote-view',
templateUrl: './quote-view.component.html',
styleUrls: ['./quote-view.component.css']
})
export class QuoteViewComponent implements OnInit {
    @Input() entity: Quote;
    errorMessage: string;
    @Output() editClicked = new EventEmitter<BaseEntity>();
    @Output() deleteClicked = new EventEmitter<BaseEntity>();

    ngOnInit(){}

    edit (){
        this.editClicked.emit(this.entity)
    }

    delete(){
        this.deleteClicked.emit(this.entity)
    }
}