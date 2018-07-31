import { Component, EventEmitter,  OnInit, ViewChild, ViewChildren, QueryList, Output } from '@angular/core';

import { environment } from '@env/environment';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { DataInputWidget } from '@app/base/DataInputWidget';

import { FormGroup } from '@angular/forms';
import { AccordionWizard } from '@app/base/accordionWizard';

@Component({
  selector: 'app-accwiz',
  templateUrl: './accwiz.component.html',
  styleUrls: ['./accwiz.component.scss']
})
export class AccwizComponent extends AccordionWizard implements OnInit {

  constructor() { super();}

  ngOnInit() {
  }


}
