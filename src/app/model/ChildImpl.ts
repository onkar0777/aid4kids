import { Child, Parent } from "@app/child/child";
import { first } from "rxjs/operators";

import * as moment from 'moment'; 

import {Gender} from "@app/enums/gender";
import * as _ from 'lodash';

export class ChildImpl implements Child{
    id:string
    firstName : string
    lastName : string
    gender : Gender
    dob : Date
    image:string
    description : string
    interests : string
    parent : string
    //ChildImpl(){}

    constructor (ifc:Child){
        _.assign(this, ifc)
    }


    name = () => `${this.firstName} ${this.lastName}`
    age = () =>   moment().diff(this.dob, 'years');

}