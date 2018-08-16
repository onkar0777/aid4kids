
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post} from "../post";
import { PostService} from "../post.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';
import { PostImpl } from '@app/model/PostImpl';

import * as _ from 'lodash';

@Component({
selector: 'post-view',
templateUrl: './post-view.component.html',
styleUrls: ['./post-edit.component.css']
})
export class PostViewComponent extends BaseEditComponent<Post> implements OnInit {
    @Input() entity: PostImpl;
    original:Post;
    errorMessage: string;

    @Output() parentClicked:EventEmitter<Post> = new EventEmitter()

    constructor(protected postService: PostService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(postService, route, router, 'posts')

    }

    ngOnInit(){
        this.original = this.entity
        this.entity = new PostImpl(this.entity);
    }

    clicked(){
        console.log('clicked')
        let temp:Post = <Post> _.pickBy(this.entity,x => typeof x != 'function');
        this.parentClicked.emit(temp)
    }

}