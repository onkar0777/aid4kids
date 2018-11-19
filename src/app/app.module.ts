import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ChildModule } from '@app/child/child.module';
//import { ParentModule } from '@app/parent/parent.module';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { FirestoreService } from '@app/base/firestore.service';
import { PostModule } from '@app/post/post.module';
import { QuoteModule } from '@app/quote/quote.module';
import { UserService } from '@app/base/user.service';




@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    LoginModule,
    ChildModule,
    PostModule,
    QuoteModule,
    //ParentModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FlashMessagesModule.forRoot()

  ],
  declarations: [AppComponent],
  providers: [
    FlashMessagesService,
    FirestoreService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
