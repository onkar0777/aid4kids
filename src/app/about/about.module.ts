import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { WizardModule } from '@app/base/wizard.module';
import { TestCompsModule } from '@app/base/testcomps';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AccwizComponent } from './accwiz/accwiz.component';
import { NavigatorComponent } from '@app/about/navigator/navigator.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    WizardModule,
    TestCompsModule,
    NgbAccordionModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent,
    AccwizComponent,
    NavigatorComponent
  ]
})
export class AboutModule { }
