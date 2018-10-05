
import { browser, element, by } from 'protractor';
//import { Child } from 'app/child/child';

export const txtByCss = (x: string) => element(by.css(x)).getText()
import * as _ from 'lodash';

export class BasePO {

    getEntity() : any { 
        return null
    }
    getName() : string { 
        return null
    }
    submitButton = element(by.css('button[type="submit"]'));

    constructor() {
        browser.get(`/${this.getName()}/add`);
        //browser.executeScript(() => localStorage.setItem('language', 'en-US'));
    }

    navigateTo() {
        return browser.get(`/${this.getName()}/add`);
    }

    navigateToList = () => browser.get(this.getName())


    submit() {
        for (var key in this.getEntity()) {
            if (key !== 'id'/* && key !== 'text' */)
                element(by.id(`${key}-input`))
                    .sendKeys(this.getEntity()[key])
        }
        this.submitButton.click();
    }

    getSuccessText() {
        return element(by.css('alert-success')).getText();
    }
}


export class BaseListPO {

    getEntity() : any { 
        return null
    }
    getName() : string { 
        return null
    }
}