

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { BaseService } from '../base/base.service';
import { BaseFireService } from '@app/base/base-fire-service.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirestoreService } from '@app/base/firestore.service';
import { AuthenticationService } from '@app/core';
import { Post } from '@app/post/post';

@Injectable()
export class PostService extends BaseFireService<Post>{
  getUnsponsored(){
    return  this.afs.colWithIds$(this.getCollName())
  }


  getCollName(){
    return 'posts'
  }


  entity_url = this.getCollName()

  constructor(public afs:FirestoreService, 
    protected messages:FlashMessagesService,
  protected authService:AuthenticationService){
      super(afs, messages)
  }
}