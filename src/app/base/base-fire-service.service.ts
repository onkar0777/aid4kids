import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore, DocumentReference } from 'angularfire2/firestore';
//import { Child } from '@app/child/child';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BaseEntity } from '@app/base/base';
import { FirestoreService } from '@app/base/firestore.service';


@Injectable({
  providedIn: 'root'
})
export class BaseFireService<T extends BaseEntity> {

  collection:AngularFirestoreCollection<T>
  clientDoc:AngularFirestoreDocument<T>
  client:Observable<T>
  clients:Observable<T[]>

  url:string = ''

  
  constructor(public afs:FirestoreService, protected messages:FlashMessagesService) { 
    // this.collection = afs.collection(this.getCollName(),
    //    ref =>ref.orderBy('lastName','asc'));
    this.url   = this.getCollName();
  }

  getCollName(){
    return ''
  }

  add(record:T){
    this.afs.add(this.getCollName(), record)
     .then( x => this.messages.show("Create Succeeded  " + x, {cssClass: 'alert-success'}))
     .catch(
       x => this.messages.show("Error Creating " + x, {cssClass: 'alert-danger'})
     )
  }

  update(record:T):Promise<void>{
   console.log(record)
   return this.afs.update(this.getDocRef(record.id), record)
  }

  delete(record:T){
    this.afs.delete(this.getDocRef(record.id))
  }

  getDocRef = (id:any) => this.getCollName() + '/' + id

  getById(id:string):Observable<T>{
    console.log(this.afs.doc(this.getDocRef(id)))
    return this.afs.doc$(this.getDocRef(id))
  }

  getRecords():Observable<T[]>{
    console.log(this.getCollName());
    return this.afs.colWithIds$(this.getCollName())
  }
}
