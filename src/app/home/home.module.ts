import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { MyCompsModule } from '@app/base/mycomps';
import { ChildModule } from '@app/child/child.module';
import { MyprofileComponent } from '@app/home/myprofile/myprofile.component';
import { ParentModule } from '@app/parent/parent.module';
import { MykidsComponent } from './mykids/mykids.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    MyCompsModule,
    ChildModule,
    ParentModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    MyprofileComponent,
    MykidsComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
