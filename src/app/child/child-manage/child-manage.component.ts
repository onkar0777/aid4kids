import { Component, OnInit } from '@angular/core';
import { BaseEditComponent } from '@app/base/base-edit.component';
import { Child } from '@app/child/child';
import { ChildService } from '@app/child/child.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Child-manage',
  templateUrl: './child-manage.component.html',
  styleUrls: ['./child-manage.component.scss']
})
export class ChildManageComponent extends BaseEditComponent<Child> implements OnInit {

  constructor(protected ChildService: ChildService,
    protected route: ActivatedRoute, protected router: Router) {
    super(ChildService, route, router, 'Childs')
    //this.createForm();
  }

  ngOnInit() {
    super.ngOnInit()
  }

}