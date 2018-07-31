
import { Component, OnInit } from '@angular/core';
import { Child } from "../child";
import {Router} from "@angular/router";
import { ChildService} from "../child.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-child-list',
templateUrl: './child-list.component.html',
styleUrls: ['./child-list.component.css']
})
export class ChildListComponent extends BaseListComponent<Child>
    implements OnInit {

    constructor(protected childService: ChildService, protected router: Router) {
        super(childService, router)
    }
}