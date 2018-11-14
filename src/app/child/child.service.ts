

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Child } from './child';
import { BaseService } from '../base/base.service';
import { BaseFireService } from '@app/base/base-fire-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirestoreService } from '@app/base/firestore.service';
import { AuthenticationService } from '@app/core';

@Injectable()
export class ChildService extends BaseFireService<Child> {

  entity_url = this.getCollName()

  constructor(public afs: FirestoreService,
    protected messages: FlashMessagesService,
    protected authService: AuthenticationService) {
    super(afs, messages)
  }

  getCollName() {
    return 'childs'
  }

  sponsor(child: Child): any {
    child.parent = this.authService.localUser.email

    this.update(child).then(
      x => this.messages.show("successfully sponsored - thanks")
    ).catch(
      error => this.messages.show("error sponsoring !! -  " + error)
    )
  }

  unsponsor(child: Child): any {
    child.parent = null;
    //TODO: create unsponsorship here

    this.update(child).then(
      x => this.messages.show("successfully sponsored - thanks")
    ).catch(
      error => this.messages.show("error sponsoring !! -  " + error)
    )
  }

  getMyKids() {
    console.log(this.authService.localUser.email);
    return this.afs.colWithIds$(this.getCollName(),
      (ref: any) => ref.where('parent', '==',
      this.authService.localUser.email))
  }

  getUnsponsored() {
    return this.afs.colWithIds$(this.getCollName(),
      (ref: any) => ref.where('parent', '==', null))
  }






}