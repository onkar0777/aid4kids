import { BaseEntity } from "@app/base/base";

import * as _ from 'lodash';
import * as Chance from 'chance';
import * as Factory from 'factory.ts'

//import {Parent} from "@app/parent/parent";

export interface Parent{
    firstName : string
    lastName : string
}



import {Gender} from "@app/enums/gender";


export  interface Child extends BaseEntity{
firstName : string
lastName : string
gender : Gender
dob : Date
image?:string //url of the image
description : string
interests : string
parent : string  }

let chance = new Chance();

export const childFactory = Factory.makeFactory<Child>({
    id: Factory.each(i => ''+ i),
firstName : chance.last(),
lastName : chance.last(),
gender : Gender.MALE,
image:null,
dob : chance.birthday(),
description : chance.paragraph(),
interests : chance.last(),
parent : null

});

