
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Child} from "../child";
import { ChildService} from "../child.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';
import { ChildImpl } from '@app/model/ChildImpl';

import * as _ from 'lodash';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
selector: 'child-view',
templateUrl: './child-view.component.html',
styleUrls: ['./child-edit.component.css']
})
export class ChildViewComponent extends BaseEditComponent<Child> implements OnInit {
    @Input() entity: ChildImpl;
    original:Child;
    errorMessage: string;

    @Output() parentClicked:EventEmitter<Child> = new EventEmitter()

    constructor(
        protected childService: ChildService,
        protected route: ActivatedRoute,
        protected router: Router,
        private afStorage: AngularFireStorage
    ) {
        super(childService, route, router, 'childs')
    }

    ngOnInit() {
        this.original = this.entity
        this.entity = new ChildImpl(this.entity);
        this.entity.imageUrl = this.afStorage.ref(this.entity.image).getDownloadURL();
        console.log(this.entity.age())
    }

    clicked() {
        console.log('clicked')
        const temp: Child = <Child> _.pickBy(this.entity, x => typeof x !== 'function');
        temp.parent = '55555'
        this.parentClicked.emit(temp)
    }

}