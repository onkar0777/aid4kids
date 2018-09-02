import { BaseEntity } from "@app/base/base";

// import * as _ from 'lodash';
// import * as Chance from 'chance';
// import * as Factory from 'factory.ts'

export interface Post extends BaseEntity {
title ?: string;
message: string;
images?: [string]; // url of the images
children: [string];
}

// let chance = new Chance();

// export const childFactory = Factory.makeFactory<Post>({
//     id: Factory.each(i => ''+ i),
//     title : chance.sentence(),
//     images: [],
//     message : chance.paragraph(),
//     children : []
// });

