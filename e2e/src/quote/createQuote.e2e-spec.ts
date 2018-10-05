import { browser, element, by } from 'protractor';
//import { Child } from 'app/child/child';
import { BasePO, txtByCss } from '../base.po';

import * as _ from 'lodash';
import * as Chance from 'chance';
import * as Factory from 'factory.ts'

export interface Quote {
    id: string
    tags: string
    text: string
    explanation: string
    page: number
}

let chance = new Chance();

export const quoteFactory = Factory.makeFactory<Quote>({
    id: Factory.each(i => '' + i),
    tags: chance.last(),
    text: chance.paragraph(),
    explanation: chance.paragraph(),
    page: chance.integer({ min: 0, max: 20 }),
});


export class ManageQuotes extends BasePO{

    entity: Quote = quoteFactory.build();
    name = 'quotes'

    getEntity(){
        return this.entity;
    }
    getName(){
        return this.name
    }
}

describe('manageQuote', () => {
    let page: ManageQuotes;

    beforeEach(() => {
        page = new ManageQuotes();
    });

    it('should display add  page and create entty', () => {
        page.navigateTo();
        expect(browser.getCurrentUrl()).toContain('/quotes/add');
        page.submit();
    });
});


export class ListQuotes  {
    name = 'quotes'
    getName(){ return this.name }
    
    constructor(){
        browser.get(`/${this.getName()}`);
    }
}

describe('listQuote', () => {
    let page: ListQuotes;

    beforeEach(() => {
        page = new ListQuotes();
    });

    it('should display add  page and create entty', () => {
        //page.navigateTo();
        expect(browser.getCurrentUrl()).toContain('/quotes');
        expect(txtByCss("h2")).toContain("Quotes")
    });
})