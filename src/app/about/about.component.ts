import { Component, OnInit, ViewChild, ViewChildren, QueryList, Output,EventEmitter } from '@angular/core';

import { environment } from '@env/environment';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { DataInputWidget } from '@app/base/DataInputWidget';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = environment.version;

  entity = {
    firstName: 'j',
    lastName:'singh',
    amount:'100',
  }

  wizardDone:boolean = false

  steps = [
    { name: 'trip',
    },
    { name: 'options',
      // disabledImg: 'assets/travel/quote.png',
      // activeImg: 'assets/travel/quoteActiveTL.png',
      // completeImg: 'assets/travel/quoteActive.png'
    },
    { name: 'medical'}
  ]

  constructor() { 
   }

  ngOnInit() { }

  onWizardComplete(entity:any){
    this.wizardDone = true;
  }

  

}
