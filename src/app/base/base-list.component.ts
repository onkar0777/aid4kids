import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { BaseEntity } from './base';
import { BaseService } from './base.service';
import { BaseFireService } from '@app/base/base-fire-service.service';
import { Observable } from 'rxjs';


export abstract class BaseListComponent<T extends BaseEntity> implements OnInit {

  $entities: Observable< T[]>;
  errorMessage: string;
  response_status: number;
  is_insert = false;

  constructor(protected service: BaseFireService<T>, protected router: Router) {
    //this.$entities = <T[]>[];
  }


  ngOnInit() {
    this.$entities = this.service.getRecords()
  }

  delete(record: T) {
    if (confirm("sure you want to delete ?" ) ) this.service.delete(record)
  }

  // onNewUser(user: T){
  //   this.entities.push(user);
  //   this.showAddUser();
  // }

  showAdd() {
    console.log('Show add', this.service.url);
    this.router.navigate(['/' + this.service.url + '/add']);
  }

  showEdit(record: T) {
    this.router.navigate(['/' + this.service.url, record.id.toString(), 'edit']);
  }

  gotoHome() {
    this.router.navigate(['/welcome']);
  }
}
