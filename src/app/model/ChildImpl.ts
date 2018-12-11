import { Child, Parent } from "@app/child/child";
import { first } from "rxjs/operators";

import * as moment from 'moment';

import {Gender} from "@app/enums/gender";
import * as _ from 'lodash';
import { Observable } from "rxjs";

export class ChildImpl implements Child {
    id: string
    firstName: string
    lastName: string
    gender: Gender

    dob: Date
    image: string
    imageUrl: Observable<any>
    description: string
    interests: string
    parent: string

    dateCreated: Date
    //ChildImpl(){}

    constructor (ifc: Child) {
        _.assign(this, ifc)
    }


    name = () => `${this.firstName} ${this.lastName}`
    age = () =>   moment().diff(this.dob, 'years');

}