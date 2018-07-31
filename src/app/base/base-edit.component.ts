import { Component, OnInit } from '@angular/core';


import {ActivatedRoute, Router} from "@angular/router";
import { BaseEntity } from './base';
import { BaseService } from './base.service';
import { BaseFireService } from '@app/base/base-fire-service.service';
//import { DisplayMessage } from '../shared/models/display-message';


export abstract class BaseEditComponent<T extends BaseEntity>   implements OnInit {

  entity:T
  errorMessage: string;
  id:any

  public compareFn(e1: BaseEntity, e2: BaseEntity) {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  } 

     /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Notification message from received
   * form request or router
   */
  //notification: DisplayMessage;
  
  //@Output() onNew = new EventEmitter<T>();
  constructor(protected service: BaseFireService<T>, 
    protected route: ActivatedRoute,
    protected router: Router, 
      protected url:string) {
       // super();
      this.entity = <T>{};
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    if(this.id){
      this.service.getById(this.id).subscribe(
        u => this.entity = u,
        error => { console.log(error) ; this.errorMessage = <any>error});
    }
  }

  getEntity(){
    return this.entity
  }

  onSubmit(entity: T){
    let that = this;
    const id = this.route.snapshot.params['id']
    console.log(entity)

    if(!this.id){
      this.service.add(entity)
      this.onBack();
    }else{
      entity.id = this.id
      this.service.update(entity)
      this.onBack();
    }

  //   if(!this.id){
  //       this.service.add(entity).subscribe(
  //         new_user => {
  //         this.onBack()
  //         },
  //         error => this.errorMessage = <any>error
  //   );
  //   return
  // }

  //   this.service.update(this.getEntity() ).subscribe(
  //     get_result,
  //     error => {
  //       this.errorMessage = <any> error
  //       this.submitted = false;
  //       console.log("Update error" + JSON.stringify(error));
  //       //this.notification = { msgType: 'error', msgBody: error /*['error'].errorMessage */};
      
  //     });

  //     function get_result(update_status:any) {
  //       if (update_status.status === 204) {
  //         console.log('update success');
  //         that.onBack();
  //       } else {
  //         return console.log('update failed');
  //       }
  //     }
  }

  onBack() {
    this.router.navigate(['/' + this.service.getCollName()]);
  }

}