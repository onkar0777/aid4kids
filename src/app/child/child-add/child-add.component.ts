
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { Child, Parent} from "../child";
import { ChildService} from "../child.service";
import { BaseEditComponent } from '@app/base/base-edit.component';
import { guid } from '@app/shared/utils'

import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

//import {Parent} from "@app/parent/parent";

@Component({
selector: 'app-child-add',
templateUrl: './child-add.component.html',
styleUrls: ['./child-add.component.css']
})
export class ChildAddComponent  extends BaseEditComponent<Child> implements OnInit {

    child: Child;
    errorMessage: string;
    public childForm: FormGroup;
    parents$: Observable<Parent[]>;
    imageUploadTask: AngularFireUploadTask;
    uploadProgress: Observable<number>;

    //parent : Parent[]


    constructor(
        protected childService: ChildService,
        protected route: ActivatedRoute,
        protected router: Router,
        private fb: FormBuilder,
        public afStorage: AngularFireStorage
    ) {
        super(childService, route, router, 'childs')
        this.createForm();
    }


    private createForm(): void {
        this.childForm = this.fb.group({
        firstName : ['', [   Validators.required,  ]],
        lastName : ['', [   Validators.required,  ]],
        image : ['', [    ]],
        gender : ['', [   Validators.required,  ]],
        dob : ['', [   Validators.required,  ]],
        description : ['', [   Validators.required,  ]],
        interests : ['', [   ,  ]],
        parent : ['', [   ]],
        });
    }

    upload(event: any) {
        if (!this.entity.id)
        this.entity.id = guid()

        console.log(event.target.files[0]);
        if (event.target.files[0]) {
            this.entity.image = `/child/profile/images/${this.entity.id}`;
            this.imageUploadTask = this.afStorage.upload(this.entity.image, event.target.files[0]);
            this.uploadProgress = this.imageUploadTask.percentageChanges();
        }

      }

    submit() {
        Object.keys(this.childForm.controls).forEach(field =>
            this.childForm.get(field).markAsTouched()
        );
        console.log(this.childForm.value)
        if (!this.entity['parent'])
            this.entity['parent'] = null
        console.log("entity", this.entity)
        super.onSubmit(this.entity);
    }

}
