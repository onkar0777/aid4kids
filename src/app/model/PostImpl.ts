import { Post } from "@app/post/post";
import { first } from "rxjs/operators";

import * as moment from 'moment';

import {Gender} from "@app/enums/gender";
import * as _ from 'lodash';

export class PostImpl implements Post {
    id: string;
    title ?: string;
    message: string;
    images?: [string]; // url of the images
    children: [string];

    constructor (ifc: Post) {
        _.assign(this, ifc);
    }
}
