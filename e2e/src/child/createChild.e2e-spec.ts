import { browser, element, by } from 'protractor';
//import { Child } from 'app/child/child';

export class CreateChildPage {
  child:any = {'firstName':'john' , lastName:'luke'}  
  firstName = element(by.css('input[formControlName="firstName"]'));
  lastName = element(by.css('input[formControlName="lastName"]'));
  submitButton = element(by.css('button[type="submit"]'));

  constructor() {
      // this.child.firstName = "john"
      // this.child.lastName = "lukas"
      //this.child.dob = "2008-09-23"
    
    // Forces default language
    browser.get('/childs/add');
    browser.executeScript(() => localStorage.setItem('language', 'en-US'));
  }

  navigateTo(){
      return  browser.get('/childs/add');
  }

  navigateToList = () => browser.get('/childs')
 


  submit() {
    this.firstName.sendKeys(this.child.firstName);
    this.lastName.sendKeys(this.child.lastName);
    this.submitButton.click();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

describe('app', () => {
    let page: CreateChildPage;
  
    beforeEach(() => {
      page = new CreateChildPage();
    });
  
    it('should display add chilld page and create child', () => {
      page.navigateTo();
      expect(browser.getCurrentUrl()).toContain('/childs/add');
      page.submit();
    });
  
    it('should display new child', () => {
      page.navigateToList();
      expect(page.getParagraphText()).toEqual('Hello world !');
    });
  });