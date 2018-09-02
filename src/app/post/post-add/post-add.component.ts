
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

import { Post} from "../post";
import { PostService} from "../post.service";
import { BaseEditComponent } from '@app/base/base-edit.component';
import { Observable } from 'rxjs';
import { Child } from '@app/child/child';

// import {Parent} from "@app/parent/parent";

@Component({
selector: 'app-post-add',
templateUrl: './post-add.component.html',
styleUrls: ['./post-add.component.css']
})
export class PostAddComponent extends BaseEditComponent<Post> implements OnInit {

    post: Post;
    errorMessage: string;
    public postForm: FormGroup;
    children$: Observable<Child[]>;

    // parent : Parent[]


    constructor(
        protected postService: PostService,
        protected route: ActivatedRoute,
        protected router: Router,
        private fb: FormBuilder
    ) {
        super(postService, route, router, 'posts');
        this.createForm();
        this.children$ = this.postService.getAllChildren();
    }


    private createForm(): void {
        this.postForm = this.fb.group({
            title : ['', []],
            message : ['', [   Validators.required, ]],
            images : [[], [   Validators.required, ]],
            children : [[], [ Validators.required  ]],
        });
    }



    submit() {
        Object.keys(this.postForm.controls).forEach(field =>
            this.postForm.get(field).markAsTouched()
        );
        console.log(this.postForm.value);
        if (!this.entity['children']) {
            this.entity['children'] = [null];
        }
        console.log("entity", this.entity);
        super.onSubmit(this.entity);
    }

}
